const areas = [
  { number: "01", title: "Territorio y memoria", text: "Procesos históricos, transformaciones del paisaje y relatos que explican cómo se construyó la provincia." },
  { number: "02", title: "Patrimonio vivo", text: "Prácticas, saberes, celebraciones y oficios entendidos desde quienes los sostienen en el presente." },
  { number: "03", title: "Creación contemporánea", text: "Artistas, artesanos y proyectos que producen nuevos sentidos desde los nueve cantones." },
  { number: "04", title: "Gobernanza cultural", text: "Documentos, preguntas y herramientas para examinar la participación pública y el derecho a relatar el territorio." },
];

const principles = [
  ["Fuentes visibles", "Cada afirmación debe permitir volver al documento, testimonio o registro del que proviene."],
  ["Diferencias claras", "Historia documentada, memoria oral, leyenda e interpretación no son lo mismo: todas pueden dialogar sin confundirse."],
  ["Conocimiento abierto", "La divulgación cobra sentido cuando puede ser leída, discutida y ampliada por la comunidad."],
  ["Territorio plural", "Ninguna institución ni sector privado posee por sí solo la voz completa de Tungurahua."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Soy Tungurahua — inicio">
          <img src="https://soytungurahua.com/assets/logo-soy-tungurahua-2026.png" alt="Soy Tungurahua" />
          <span className="brand-edition">.ORG</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#investigacion">Investigación</a><a href="#metodo">Método</a><a href="#archivo">Archivo</a><a href="#participar">Participar</a>
        </nav>
        <a className="com-link" href="https://soytungurahua.com">Ir a soytungurahua.com ↗</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Plataforma independiente de conocimiento territorial</p>
          <h1>Tungurahua<br />se investiga,<br /><em>se documenta.</em></h1>
          <p className="hero-intro">Un espacio de divulgación para reunir fuentes, investigaciones y preguntas sobre la memoria, la cultura y las transformaciones de la provincia.</p>
          <div className="hero-actions"><a className="button primary" href="#investigacion">Explorar líneas de investigación</a><a className="button secondary" href="#metodo">Conocer el método</a></div>
        </div>
        <aside className="territory-card" aria-label="Alcance territorial">
          <div className="map-mark">T</div><p className="card-kicker">Una provincia<br />para comprender</p><strong>9</strong><span>cantones conectados por fuentes, memorias y procesos.</span>
          <div className="cantons">Ambato · Baños · Cevallos · Mocha · Patate · Pelileo · Píllaro · Quero · Tisaleo</div>
        </aside>
      </section>

      <section className="statement"><p>El territorio no es un producto terminado.</p><h2>Es una conversación que necesita memoria, evidencia y participación.</h2></section>

      <section className="section" id="investigacion">
        <div className="section-heading">
          <div><span className="section-number">01</span><p className="eyebrow">Líneas de investigación</p></div><h2>Conocer antes de repetir.</h2>
          <p>Organizamos el conocimiento por problemas y relaciones, no como una lista de atractivos. Cada línea puede reunir artículos, documentos, audios, cronologías y fuentes abiertas.</p>
        </div>
        <div className="area-grid">{areas.map((area) => <article className="area-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><a href="#archivo" aria-label={`Explorar ${area.title}`}>Explorar línea <b>↗</b></a></article>)}</div>
      </section>

      <section className="method" id="metodo">
        <div className="method-title"><span className="section-number">02</span><p className="eyebrow">Criterios editoriales</p><h2>Divulgar también es explicar cómo sabemos lo que decimos.</h2></div>
        <div className="principles">{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="archive" id="archivo">
        <div className="archive-copy"><span className="section-number">03</span><p className="eyebrow">Archivo abierto</p><h2>Una infraestructura pública para la memoria.</h2><p>El archivo reunirá publicaciones, fuentes primarias, registros sonoros, mapas y conjuntos documentales. Cada pieza conservará autoría, fecha, procedencia y condiciones de uso.</p><a className="text-link" href="#participar">Proponer un documento →</a></div>
        <div className="archive-index" aria-label="Tipos de documentos del archivo"><div><b>INV</b><span>Investigaciones</span><small>Artículos y dossiers</small></div><div><b>FUE</b><span>Fuentes</span><small>Documentos y referencias</small></div><div><b>ORA</b><span>Memoria oral</span><small>Voces y testimonios</small></div><div><b>DAT</b><span>Datos abiertos</span><small>Catálogos y cronologías</small></div></div>
      </section>

      <section className="participate" id="participar"><p className="eyebrow">Contribuir al conocimiento común</p><h2>¿Tienes una fuente, una investigación o una corrección?</h2><p>Este proyecto crece con aportes verificables y miradas diversas. La participación no depende de invitaciones ni afiliaciones institucionales.</p><a className="button light" href="mailto:contacto@soytungurahua.org">Escribir al equipo</a></section>

      <footer><div className="footer-brand"><img src="https://soytungurahua.com/assets/logo-soy-tungurahua-2026.png" alt="" /><b>.ORG</b></div><p>Conocimiento, memoria y territorio.<br />Proyecto cultural independiente de Tungurahua.</p><div><a href="https://soytungurahua.com">Portal turístico-cultural</a><a href="#metodo">Criterios editoriales</a><a href="#participar">Contacto</a></div><small>© 2026 Soy Tungurahua</small></footer>
    </main>
  );
}
