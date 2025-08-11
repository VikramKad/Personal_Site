const ProjectCard = ({ title, description, link }) => (
  <div className="bg-white shadow rounded-xl p-6 border hover:shadow-md transition min-h-[28rem] flex flex-col justify-between">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View Project →
      </a>
    )}
  </div>
);

export default ProjectCard;

