import Layout from '../../components/Layout';
import { useState, useEffect, useCallback } from 'react';
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
import { FaPlus, FaEdit, FaTrash, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';

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

  return (
    <Layout>
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Job Applications</h1>
          <button
            onClick={() => {
              setEditingApp(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <FaPlus />
            Add Application
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by company, title, or notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading...</div>
        ) : applications.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No applications found. Click "Add Application" to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <ApplicationCard
                key={app.id}
                application={app}
                onEdit={() => {
                  setEditingApp(app);
                  setShowModal(true);
                }}
                onDelete={() => handleDelete(app.id)}
              />
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
    </Layout>
  );
}

function ApplicationCard({
  application,
  onEdit,
  onDelete,
}: {
  application: Application;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold">{application.company_name}</h3>
            <span
              className={`px-2 py-1 text-xs rounded-full text-white ${
                STATUS_COLORS[application.status]
              }`}
            >
              {STATUS_LABELS[application.status]}
            </span>
          </div>
          {application.job_title && (
            <p className="text-gray-300 mb-1">{application.job_title}</p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            {application.location && <span>{application.location}</span>}
            {application.applied_date && (
              <span>Applied: {application.applied_date}</span>
            )}
            {application.source && (
              <span>Source: {SOURCE_LABELS[application.source]}</span>
            )}
          </div>
          {application.notes && (
            <p className="mt-2 text-gray-400 text-sm line-clamp-2">
              {application.notes}
            </p>
          )}
        </div>
        <div className="flex gap-2 ml-4">
          {application.job_url && (
            <a
              href={application.job_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              title="View Job"
            >
              <FaExternalLinkAlt />
            </a>
          )}
          <button
            onClick={onEdit}
            className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-gray-400 hover:text-red-400 transition-colors"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
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
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {application ? 'Edit Application' : 'Add Application'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name *
            </label>
            <input
              type="text"
              required
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job Title</label>
              <input
                type="text"
                value={formData.job_title || ''}
                onChange={(e) =>
                  setFormData({ ...formData, job_title: e.target.value })
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                value={formData.location || ''}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Job URL</label>
            <input
              type="url"
              value={formData.job_url || ''}
              onChange={(e) =>
                setFormData({ ...formData, job_url: e.target.value })
              }
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as ApplicationStatus,
                  })
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {STATUS_LABELS[status]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Applied Date
              </label>
              <input
                type="date"
                value={formData.applied_date || ''}
                onChange={(e) =>
                  setFormData({ ...formData, applied_date: e.target.value })
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Salary Range
              </label>
              <input
                type="text"
                placeholder="e.g. $80k - $100k"
                value={formData.salary_range || ''}
                onChange={(e) =>
                  setFormData({ ...formData, salary_range: e.target.value })
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Source</label>
              <select
                value={formData.source || 'manual'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    source: e.target.value as CreateApplicationDTO['source'],
                  })
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
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
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              rows={3}
              value={formData.notes || ''}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              {application ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
