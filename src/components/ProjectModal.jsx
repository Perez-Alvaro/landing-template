import React, { useEffect, useRef } from "react";
import "../styles.css";

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    closeRef.current && closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      previous && previous.focus();
    };
  }, [onClose]);

  const handleImgError = (e) => {
    e.target.style.display = "none";
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    e.target.parentNode.appendChild(placeholder);
  };

  const { title, description, tags = [], coverImage, gallery = [], links = {}, meta = {} } = project;
  const images = gallery.length ? gallery : [coverImage];

  return (
    <div className="project-modal-overlay" role="dialog" aria-labelledby="project-title" aria-describedby="project-desc">
      <div className="project-modal" ref={dialogRef} tabIndex="-1">
        <button className="modal-close" onClick={onClose} ref={closeRef} aria-label="Cerrar">
          ×
        </button>
        <h2 id="project-title" className="modal-title">{title}</h2>
        {meta.role && (
          <p className="modal-meta">{meta.role}{meta.timeline ? ` • ${meta.timeline}` : ""}</p>
        )}
        <p id="project-desc" className="modal-description">{description}</p>
        {gallery.length > 0 ? (
          <div className="modal-gallery">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.alt}
                loading="lazy"
                onError={handleImgError}
              />
            ))}
          </div>
        ) : (
          <img
            src={coverImage.url}
            alt={coverImage.alt}
            className="modal-cover"
            loading="lazy"
            onError={handleImgError}
          />
        )}
        <div className="modal-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="modal-actions">
          {links.deploy && (
            <a
              href={links.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project action-btn"
            >
              Deploy <span aria-hidden="true">↗</span>
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project action-btn"
            >
              Repo <span aria-hidden="true">↗</span>
            </a>
          )}
          {links.drive && (
            <a
              href={links.drive}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project action-btn"
            >
              Drive <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

