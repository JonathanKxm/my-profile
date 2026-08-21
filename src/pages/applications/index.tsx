import Layout from '../../components/Layout';
import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  listApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from '../../services/api';
import type {
  Application,
  ApplicationStatus,
  CreateApplicationDTO,
} from '../../types/application';
import {
  STATUS_LABELS,
  STATUS_COLORS,
  SOURCE_LABELS,
} from '../../types/application';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaExternalLinkAlt, FaEye, FaTimes, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const STATUS_OPTIONS: ApplicationStatus[] = [
  'saved',
  'applied',
  'interviewing',
  'offer',
  'rejected',
  'withdrawn',
];

export default function Applications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [editingApp, setEditingApp] = useState<Application | null>(null);
  const [detailApp, setDetailApp] = useState<Application | null>(null);

  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await listApplications({
        status: statusFilter || undefined,
        search: search || undefined,
      });
      setApplications(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load applications');
    } finally {
      setLoading(false);
    }
  }, [statusFilter, search]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this application?')) return;

    try {
      await deleteApplication(id);
      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete');
    }
  };

  const handleSubmit = async (data: CreateApplicationDTO) => {
    try {
      if (editingApp) {
        const updated = await updateApplication(editingApp.id, data);
        setApplications((prev) =>
          prev.map((app) => (app.id === editingApp.id ? updated : app))
        );
      } else {
        const newApp = await createApplication(data);
        setApplications((prev) => [newApp, ...prev]);
      }
      setShowModal(false);
      setEditingApp(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save');
    }
  };

  const groupedApplications = useMemo(() => {
    const groups: { [key: string]: Application[] } = {};
    applications.forEach((app) => {
      const key = app.applied_date || 'no-date';
      if (!groups[key]) groups[key] = [];
      groups[key].push(app);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => (a < b ? 1 : -1))
      .map(([key, apps]) => ({
        key,
        label: formatDateLabel(key),
        applications: apps,
      }));
  }, [applications]);

  const stats = useMemo(() => ({
    total: applications.length,
    applied: applications.filter((a) => a.status === 'applied').length,
    interviewing: applications.filter((a) => a.status === 'interviewing').length,
    rejected: applications.filter((a) => a.status === 'rejected').length,
  }), [applications]);

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Job Applications</h1>
              <p className="text-gray-500 mt-1">Track your job search progress</p>
            </div>
            <button
              onClick={() => {
                setEditingApp(null);
                setShowModal(true);
              }}
              className="flex items-center gap-2 bg-jonathan hover:bg-jonathan-light text-white px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-jonathan/20"
            >
              <FaPlus />
              Add New
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total" value={stats.total} color="text-white" />
            <StatCard label="Applied" value={stats.applied} color="text-blue-400" />
            <StatCard label="Interviewing" value={stats.interviewing} color="text-yellow-400" />
            <StatCard label="Rejected" value={stats.rejected} color="text-red-400" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by company, title, or notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-800/70 border border-gray-700/50 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-gray-800/70 border border-gray-700/50 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all cursor-pointer"
            >
              <option value="">All Status</option>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-4 mb-6 text-red-400">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-jonathan border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
                <FaSearch className="text-gray-600 text-2xl" />
              </div>
              <p className="text-gray-400 mb-4">No applications found</p>
              <button
                onClick={() => setShowModal(true)}
                className="text-jonathan hover:text-jonathan-light transition-colors"
              >
                Add your first application
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {groupedApplications.map((group) => (
                <div key={group.key}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50">
                      <FaCalendarAlt className="text-white text-xs" />
                      <span className="text-sm font-medium text-white">{group.label}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-700/50 to-transparent"></div>
                    <span className="text-xs text-gray-500">
                      {group.applications.length} {group.applications.length === 1 ? 'application' : 'applications'}
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {group.applications.map((app) => (
                      <ApplicationCard
                        key={app.id}
                        application={app}
                        onView={() => setDetailApp(app)}
                        onEdit={() => {
                          setEditingApp(app);
                          setShowModal(true);
                        }}
                        onDelete={() => handleDelete(app.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <ApplicationModal
          application={editingApp}
          onClose={() => {
            setShowModal(false);
            setEditingApp(null);
          }}
          onSubmit={handleSubmit}
        />
      )}

      {detailApp && (
        <DetailModal
          application={detailApp}
          onClose={() => setDetailApp(null)}
          onEdit={() => {
            setDetailApp(null);
            setEditingApp(detailApp);
            setShowModal(true);
          }}
        />
      )}
    </Layout>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="bg-gray-800/40 border border-gray-700/30 rounded-xl p-4">
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function formatDateLabel(key: string): string {
  if (key === 'no-date') return 'No Date';
  const date = new Date(key);
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function ApplicationCard({
  application,
  onView,
  onEdit,
  onDelete,
}: {
  application: Application;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="group relative bg-gray-800/40 border border-gray-700/30 rounded-2xl p-5 hover:bg-gray-800/60 hover:border-jonathan/40 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 text-xs font-bold rounded-full ${STATUS_COLORS[application.status]}`}>
          {STATUS_LABELS[application.status]}
        </span>
        <div className="flex gap-1">
          <button
            onClick={onView}
            className="p-2 text-gray-500 hover:text-jonathan hover:bg-jonathan/10 rounded-lg transition-all"
            title="View Details"
          >
            <FaEye size={16} />
          </button>
          <button
            onClick={onEdit}
            className="p-2 text-gray-500 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all"
            title="Edit"
          >
            <FaEdit size={16} />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
            title="Delete"
          >
            <FaTrash size={16} />
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-1 pr-16">{application.company_name}</h3>
      {application.job_title && (
        <p className="text-gray-400 text-sm mb-4">{application.job_title}</p>
      )}

      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
        {application.location && (
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-jonathan text-xs" />
            <span>{application.location}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <FaExternalLinkAlt className="text-gray-500 text-xs" />
          <span>{SOURCE_LABELS[application.source]}</span>
        </div>
      </div>

      {application.notes && (
        <p className="mt-4 text-gray-500 text-xs line-clamp-2 border-t border-gray-700/30 pt-3">
          {application.notes}
        </p>
      )}

      <button
        onClick={onView}
        className="mt-4 w-full py-2.5 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-700 rounded-xl transition-colors"
      >
        View Details
      </button>
    </div>
  );
}

function DetailModal({
  application,
  onClose,
  onEdit,
}: {
  application: Application;
  onClose: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-800 border-b border-gray-700/50 px-6 py-4 flex justify-between items-center">
          <div className="flex-1 min-w-0 pr-4">
            <h2 className="text-xl font-bold text-white truncate">{application.company_name}</h2>
            {application.job_title && (
              <p className="text-gray-400 text-sm mt-0.5 truncate">{application.job_title}</p>
            )}
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0">
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className={`px-4 py-1.5 text-sm font-bold rounded-full ${STATUS_COLORS[application.status]}`}>
              {STATUS_LABELS[application.status]}
            </span>
            {application.source && (
              <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-gray-700/50 text-gray-300">
                {SOURCE_LABELS[application.source]}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-5">
            {application.location && (
              <DetailItem icon={<FaMapMarkerAlt />} label="Location" value={application.location} />
            )}
            {application.applied_date && (
              <DetailItem icon={<FaCalendarAlt />} label="Applied Date" value={formatDate(application.applied_date)} />
            )}
            {application.salary_range && (
              <DetailItem icon={<span className="text-jonathan">$</span>} label="Salary Range" value={application.salary_range} />
            )}
          </div>

          {application.job_url && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400">Job URL</label>
              <a
                href={application.job_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-jonathan hover:text-jonathan-light transition-colors bg-gray-900/50 rounded-lg p-3 break-all"
              >
                <FaExternalLinkAlt size={14} />
                <span className="text-sm hover:underline">{application.job_url}</span>
              </a>
            </div>
          )}

          {application.cover_letter && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400">Cover Letter</label>
              <div className="bg-gray-900/50 rounded-xl p-4 text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                {application.cover_letter}
              </div>
            </div>
          )}

          {application.notes && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400">Notes</label>
              <div className="bg-gray-900/50 rounded-xl p-4 text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                {application.notes}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-gray-700/50">
            <button
              onClick={() => window.open(application.job_url || '', '_blank')}
              disabled={!application.job_url}
              className="flex-1 flex items-center justify-center gap-2 bg-jonathan hover:bg-jonathan-light text-white px-5 py-3 rounded-xl transition-colors font-semibold shadow-lg shadow-jonathan/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              <FaExternalLinkAlt />
              Visit Job Page
            </button>
            <button
              onClick={onEdit}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors font-semibold"
            >
              <FaEdit />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="space-y-2 bg-gray-900/30 rounded-xl p-4">
      <div className="flex items-center gap-2">
        <span className="text-jonathan">{icon}</span>
        <label className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</label>
      </div>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

function ApplicationModal({
  application,
  onClose,
  onSubmit,
}: {
  application: Application | null;
  onClose: () => void;
  onSubmit: (data: CreateApplicationDTO) => void;
}) {
  const [formData, setFormData] = useState<CreateApplicationDTO>({
    company_name: application?.company_name || '',
    job_title: application?.job_title || '',
    job_url: application?.job_url || '',
    location: application?.location || '',
    status: application?.status || 'saved',
    applied_date: application?.applied_date || '',
    salary_range: application?.salary_range || '',
    notes: application?.notes || '',
    source: application?.source || 'manual',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        <div className="bg-gray-800 border-b border-gray-700/50 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">
            {application ? 'Edit Application' : 'Add Application'}
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name *</label>
            <input
              type="text"
              required
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Job Title</label>
              <input
                type="text"
                value={formData.job_title || ''}
                onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Location</label>
              <input
                type="text"
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Job URL</label>
            <input
              type="url"
              value={formData.job_url || ''}
              onChange={(e) => setFormData({ ...formData, job_url: e.target.value })}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as ApplicationStatus })}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all cursor-pointer"
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>{STATUS_LABELS[status]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Applied Date</label>
              <input
                type="date"
                value={formData.applied_date || ''}
                onChange={(e) => setFormData({ ...formData, applied_date: e.target.value })}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all [&::-webkit-calendar-picker-indicator]:invert"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Salary Range</label>
              <input
                type="text"
                placeholder="e.g. $80k - $100k"
                value={formData.salary_range || ''}
                onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Source</label>
              <select
                value={formData.source || 'manual'}
                onChange={(e) => setFormData({ ...formData, source: e.target.value as CreateApplicationDTO['source'] })}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all cursor-pointer"
              >
                <option value="manual">Manual</option>
                <option value="linkedin">LinkedIn</option>
                <option value="indeed">Indeed</option>
                <option value="weworkremotely">We Work Remotely</option>
                <option value="remoteok">RemoteOK</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Notes</label>
            <textarea
              rows={4}
              value={formData.notes || ''}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jonathan focus:ring-1 focus:ring-jonathan transition-all resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700/50 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-jonathan hover:bg-jonathan-light text-white px-5 py-3 rounded-xl transition-colors font-semibold shadow-lg shadow-jonathan/20"
            >
              {application ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
