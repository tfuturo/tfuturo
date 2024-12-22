

export default function PodcastSection({ 
  sectionTitle, 
  sectionDescription, 
  lastEpisodeText,
  lastEpisodeEmbed, 
  linksText,
  podcastLinks, 
  sideImage 
}) {
  return (
    <section className="podcast-section py-5 bg-highlight-secondary">
      <div className="container">
        <div className="row align-items-center">
          {/* Title and Description: 2/3 Width */}
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3">{sectionTitle}</h2>
            <p className="text-muted">{sectionDescription}</p>

            
        {/* Miniature and Social Links */}
        <div className="row align-items-center mt-4">
          {/* Miniature: 1/3 Width */}
          <div className="col-lg-6">
          <p className="lead text-center">{lastEpisodeText}</p>
            <div className="youtube-embed d-flex justify-content-center">
              <iframe
                width="100%"
                height="215"
                src={lastEpisodeEmbed}
                title="Last Episode"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Social Media Icons: 1/3 Width */}
          <div className="col-lg-6 text-center text-lg-start">
            <p className="lead text-center">{linksText}</p>
            
            <div className="d-flex justify-content-center justify-content-lg-center gap-3">
              <a href={podcastLinks.spotify} target="_blank" rel="noreferrer">
                <i className="bi bi-spotify fs-3 text-primary"></i>
              </a>
              <a href={podcastLinks.youtube} target="_blank" rel="noreferrer">
                <i className="bi bi-youtube fs-3 text-primary"></i>
              </a>
              <a href={podcastLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin fs-3 text-primary"></i>
              </a>
            </div>
          </div>
        </div>
          </div>

          {/* Side Image: 1/3 Width */}
          <div className="col-lg-5 text-center">
            <img
              src={sideImage}
              alt="Podcast"
              className="img-fluid rounded"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
