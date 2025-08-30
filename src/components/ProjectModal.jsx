import React, { useEffect, useRef } from "react";
import "../styles.css";

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") trapFocus(e);
    };
    document.addEventListener("keydown", handleKey);

    const focusable = modalRef.current.querySelectorAll("a,button");
    focusable[0]?.focus();

    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const trapFocus = (e) => {
    const focusable = modalRef.current.querySelectorAll("a,button");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content" ref={modalRef}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

        {project.gallery && project.gallery.length > 0 ? (
          <div className="modal-gallery">
            {project.gallery.map((img, idx) => (
              <img key={idx} src={img.url} alt={img.alt} loading="lazy" />
            ))}
          </div>
        ) : (
          <img
            src={project.coverImage.url}
            alt={project.coverImage.alt}
            loading="lazy"
            className="modal-cover"
          />
        )}

        <div className="modal-links">
          {project.links.deploy && (
            <a
              href={project.links.deploy}
              className="btn project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              className="btn project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          )}
          {project.links.drive && (
            <a
              href={project.links.drive}
              className="btn project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drive
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
