import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaGoogleDrive } from "react-icons/fa";
import "../styles.css";

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    lastFocused.current = document.activeElement;
    const focusable = dialogRef.current.querySelectorAll("a, button");
    focusable[0]?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Tab") {
        const elements = dialogRef.current.querySelectorAll("a, button");
        if (elements.length === 0) return;
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      lastFocused.current && lastFocused.current.focus();
    };
  }, [onClose]);

  const hasGallery = project.gallery && project.gallery.length > 0;

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="project-title" aria-describedby="project-description">
      <div className="modal-content" ref={dialogRef}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <img
          src={project.coverImage.url}
          alt={project.coverImage.alt}
          onError={(e) => (e.currentTarget.src = "/about-default.png")}
          loading="lazy"
        />
        <h2 id="project-title">{project.title}</h2>
        <p id="project-description" className="modal-description" style={{ whiteSpace: "pre-line" }}>
          {project.description}
        </p>
        <div>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
        {hasGallery && (
          <div className="modal-gallery">
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                onError={(e) => (e.currentTarget.src = "/about-default.png")}
                loading="lazy"
              />
            ))}
          </div>
        )}
        <div className="modal-links">
          {project.links.deploy && (
            <a
              className="btn-project"
              href={project.links.deploy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy <FaExternalLinkAlt />
            </a>
          )}
          {project.links.repo && (
            <a
              className="btn-project"
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo <FaGithub />
            </a>
          )}
          {project.links.drive && (
            <a
              className="btn-project"
              href={project.links.drive}
              target="_blank"
              rel="noopener noreferrer"
            >
              Drive <FaGoogleDrive />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
