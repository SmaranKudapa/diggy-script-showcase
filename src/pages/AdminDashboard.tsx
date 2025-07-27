import { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Project, Testimonial, sampleProjects, sampleTestimonials } from '../data/sampleData';

const AdminDashboard = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(sampleTestimonials);
  const [activeTab, setActiveTab] = useState<'projects' | 'testimonials'>('projects');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  // Project form state
  const [projectForm, setProjectForm] = useState<Omit<Project, 'id'>>({
    title: '',
    youtube_video_id: '',
    game_link: '',
    technologies: [],
    project_type: 'development',
    sort_order: 1
  });

  // Testimonial form state  
  const [testimonialForm, setTestimonialForm] = useState<Omit<Testimonial, 'id'>>({
    client_name: '',
    image_url: ''
  });

  const extractYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : url;
  };

  const handleProjectSubmit = () => {
    if (!projectForm.title.trim()) return;

    const videoId = extractYouTubeVideoId(projectForm.youtube_video_id);
    
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...projectForm, id: editingProject.id, youtube_video_id: videoId }
          : p
      ));
      setEditingProject(null);
    } else {
      const newProject: Project = {
        ...projectForm,
        id: Date.now().toString(),
        youtube_video_id: videoId
      };
      setProjects([...projects, newProject]);
      setIsAddingProject(false);
    }

    setProjectForm({
      title: '',
      youtube_video_id: '',
      game_link: '',
      technologies: [],
      project_type: 'development',
      sort_order: 1
    });
  };

  const handleTestimonialSubmit = () => {
    if (!testimonialForm.client_name.trim() || !testimonialForm.image_url.trim()) return;

    if (editingTestimonial) {
      setTestimonials(testimonials.map(t =>
        t.id === editingTestimonial.id
          ? { ...testimonialForm, id: editingTestimonial.id }
          : t
      ));
      setEditingTestimonial(null);
    } else {
      const newTestimonial: Testimonial = {
        ...testimonialForm,
        id: Date.now().toString()
      };
      setTestimonials([...testimonials, newTestimonial]);
      setIsAddingTestimonial(false);
    }

    setTestimonialForm({
      client_name: '',
      image_url: ''
    });
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const startEditProject = (project: Project) => {
    setProjectForm({
      title: project.title,
      youtube_video_id: project.youtube_video_id,
      game_link: project.game_link,
      technologies: project.technologies,
      project_type: project.project_type,
      sort_order: project.sort_order
    });
    setEditingProject(project);
  };

  const startEditTestimonial = (testimonial: Testimonial) => {
    setTestimonialForm({
      client_name: testimonial.client_name,
      image_url: testimonial.image_url
    });
    setEditingTestimonial(testimonial);
  };

  const addTechnology = (tech: string) => {
    if (tech.trim() && !projectForm.technologies.includes(tech.trim())) {
      setProjectForm({
        ...projectForm,
        technologies: [...projectForm.technologies, tech.trim()]
      });
    }
  };

  const removeTechnology = (tech: string) => {
    setProjectForm({
      ...projectForm,
      technologies: projectForm.technologies.filter(t => t !== tech)
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-8">
          Admin Dashboard
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="gaming-card p-1 flex">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'projects' ? 'btn-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'testimonials' ? 'btn-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Manage Projects</h2>
              <button
                onClick={() => setIsAddingProject(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={16} />
                Add Project
              </button>
            </div>

            {/* Add/Edit Project Form */}
            {(isAddingProject || editingProject) && (
              <div className="gaming-card">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground placeholder-muted-foreground"
                      placeholder="Project title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      YouTube URL
                    </label>
                    <input
                      type="text"
                      value={projectForm.youtube_video_id}
                      onChange={(e) => setProjectForm({ ...projectForm, youtube_video_id: e.target.value })}
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground placeholder-muted-foreground"
                      placeholder="YouTube video URL or ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Game Link
                    </label>
                    <input
                      type="text"
                      value={projectForm.game_link}
                      onChange={(e) => setProjectForm({ ...projectForm, game_link: e.target.value })}
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground placeholder-muted-foreground"
                      placeholder="Roblox game URL"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      value={projectForm.project_type}
                      onChange={(e) => setProjectForm({ ...projectForm, project_type: e.target.value as Project['project_type'] })}
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground"
                    >
                      <option value="development">Development</option>
                      <option value="design">Design</option>
                      <option value="system">System</option>
                      <option value="ui">UI</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Technologies
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {projectForm.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 glass-effect rounded-full text-sm flex items-center gap-2"
                        >
                          {tech}
                          <button
                            onClick={() => removeTechnology(tech)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Add technology (press Enter)"
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground placeholder-muted-foreground"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addTechnology(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setIsAddingProject(false);
                      setEditingProject(null);
                      setProjectForm({
                        title: '',
                        youtube_video_id: '',
                        game_link: '',
                        technologies: [],
                        project_type: 'development',
                        sort_order: 1
                      });
                    }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                  <button
                    onClick={handleProjectSubmit}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Save size={16} />
                    Save Project
                  </button>
                </div>
              </div>
            )}

            {/* Projects List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="gaming-card">
                  <div className="relative mb-4 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtube_video_id}`}
                      title={project.title}
                      className="w-full h-32 object-cover"
                      frameBorder="0"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="px-2 py-1 text-xs glass-effect rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 text-xs glass-effect rounded">
                        +{project.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between gap-2">
                    <button
                      onClick={() => startEditProject(project)}
                      className="flex-1 btn-secondary flex items-center justify-center gap-2"
                    >
                      <Edit size={14} />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="px-3 py-2 glass-effect rounded-lg text-destructive hover:bg-destructive/20 transition-colors duration-300"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Manage Testimonials</h2>
              <button
                onClick={() => setIsAddingTestimonial(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={16} />
                Add Testimonial
              </button>
            </div>

            {/* Add/Edit Testimonial Form */}
            {(isAddingTestimonial || editingTestimonial) && (
              <div className="gaming-card">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Client Name *
                    </label>
                    <input
                      type="text"
                      value={testimonialForm.client_name}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, client_name: e.target.value })}
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground placeholder-muted-foreground"
                      placeholder="Client name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Image URL *
                    </label>
                    <input
                      type="text"
                      value={testimonialForm.image_url}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, image_url: e.target.value })}
                      className="w-full px-4 py-2 glass-effect rounded-lg text-foreground placeholder-muted-foreground"
                      placeholder="Image URL"
                    />
                  </div>
                </div>

                {testimonialForm.image_url && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preview
                    </label>
                    <img
                      src={testimonialForm.image_url}
                      alt="Preview"
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                  </div>
                )}

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setIsAddingTestimonial(false);
                      setEditingTestimonial(null);
                      setTestimonialForm({
                        client_name: '',
                        image_url: ''
                      });
                    }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                  <button
                    onClick={handleTestimonialSubmit}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Save size={16} />
                    Save Testimonial
                  </button>
                </div>
              </div>
            )}

            {/* Testimonials List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="gaming-card text-center">
                  <img
                    src={testimonial.image_url}
                    alt={testimonial.client_name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <h3 className="text-lg font-bold text-foreground mb-4">{testimonial.client_name}</h3>
                  
                  <div className="flex justify-between gap-2">
                    <button
                      onClick={() => startEditTestimonial(testimonial)}
                      className="flex-1 btn-secondary flex items-center justify-center gap-2"
                    >
                      <Edit size={14} />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className="px-3 py-2 glass-effect rounded-lg text-destructive hover:bg-destructive/20 transition-colors duration-300"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;