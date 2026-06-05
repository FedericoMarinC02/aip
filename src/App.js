import { useEffect, useRef, useState } from 'react';
import './App.css';
import senaLogo from './imgs/Group_50-removebg-preview.png';
import laravelLogo from './imgs/Laravel.png';
import phpLogo from './imgs/php.png';
import bootstrapLogo from './imgs/Boostrap.png';
import jsLogo from './imgs/js.webp';
import ajaxLogo from './imgs/Ajax.png';
import apiLogo from './imgs/api.png';
import chartLogo from './imgs/chart.png';
import mysqlLogo from './imgs/Mysql.webp';
import workbenchLogo from './imgs/mysql workbench.png';
import workbenchFit from './imgs/workbench-fit.png';
import phpMyAdminLogo from './imgs/PhpMyAdmin.png';
import apacheLogo from './imgs/apache.png';

const quickStats = [
  { icon: 'users', value: 'Multiacceso', label: 'usuarios y visitantes' },
  { icon: 'scan', value: 'Tiempo real', label: 'registro inmediato' },
];

const objectives = [
  'Administrar usuarios y roles.',
  'Validar identidad con varios métodos.',
  'Registrar entradas y salidas en tiempo real.',
  'Controlar visitantes y permisos.',
  'Generar reportes visuales.',
  'Notificar eventos de seguridad.',
];

const technologies = [
  {
    icon: 'server',
    title: 'Backend',
    description: 'Lógica, seguridad y servicios del sistema.',
    items: [
      { label: 'Laravel MVC', logo: laravelLogo, alt: 'Laravel' },
      { label: 'PHP 8.x', logo: phpLogo, alt: 'PHP' },
      { label: 'APIs REST', logo: apiLogo, alt: 'API REST' },
    ],
  },
  {
    icon: 'monitor',
    title: 'Frontend',
    description: 'Interfaz clara para consultas, paneles y reportes.',
    items: [
      { label: 'Bootstrap 5', logo: bootstrapLogo, alt: 'Bootstrap' },
      { label: 'JavaScript', logo: jsLogo, alt: 'JavaScript' },
      { label: 'AJAX', logo: ajaxLogo, alt: 'AJAX' },
      { label: 'Chart.js', logo: chartLogo, alt: 'Chart.js' },
    ],
  },
  {
    icon: 'database',
    title: 'Datos e Infraestructura',
    description: 'Base de datos, administración y servidor web.',
    items: [
      { label: 'MySQL 8', logo: mysqlLogo, alt: 'MySQL' },
      { label: 'MySQL Workbench', logo: workbenchLogo, alt: 'MySQL Workbench' },
      { label: 'phpMyAdmin', logo: phpMyAdminLogo, alt: 'phpMyAdmin' },
      { label: 'Apache o Nginx', logo: apacheLogo, alt: 'Apache' },
    ],
  },
];

const architecture = [
  {
    icon: 'cube',
    title: 'Modelo',
    text: 'Organiza entidades, reglas y base de datos.',
  },
  {
    icon: 'layout',
    title: 'Vista',
    text: 'Muestra pantallas claras para cada perfil.',
  },
  {
    icon: 'flow',
    title: 'Controlador',
    text: 'Valida solicitudes y coordina las operaciones.',
  },
  {
    icon: 'lock',
    title: 'Modularidad',
    text: 'Facilita mantenimiento y crecimiento.',
  },
  {
    icon: 'plug',
    title: 'Integración',
    text: 'Conecta QR, biometría y torniquetes.',
  },
  {
    icon: 'sync',
    title: 'Centralización',
    text: 'Unifica registros y seguimiento.',
  },
];

const modules = [
  {
    icon: 'id',
    title: 'Gestión de Usuarios',
    text: 'Datos, roles y estados de acceso.',
  },
  {
    icon: 'fingerprint',
    title: 'Autenticación',
    text: 'Validación por huella, QR, carné o PIN.',
  },
  {
    icon: 'gate',
    title: 'Control de Acceso',
    text: 'Autoriza, bloquea y registra movimientos.',
  },
  {
    icon: 'visitor',
    title: 'Gestión de Visitantes',
    text: 'Permisos temporales y seguimiento externo.',
  },
  {
    icon: 'alarm',
    title: 'Seguridad y Alertas',
    text: 'Alertas ante intentos fallidos o eventos inusuales.',
  },
  {
    icon: 'chart',
    title: 'Reportes y Estadísticas',
    text: 'Gráficos e indicadores para analizar el flujo.',
  },
  {
    icon: 'shield',
    title: 'Auditoría',
    text: 'Historial de acciones y evidencias.',
  },
];

const databaseTables = [
  {
    name: 'usuarios',
    fields: 'Datos principales de cada persona registrada.',
  },
  {
    name: 'roles',
    fields: 'Permisos y alcance de cada perfil.',
  },
  {
    name: 'accesos',
    fields: 'Fecha, hora, método y resultado.',
  },
  {
    name: 'visitantes',
    fields: 'Permisos, motivo y autorización.',
  },
  {
    name: 'dispositivos',
    fields: 'Lectores, torniquetes y puntos de acceso.',
  },
  {
    name: 'alertas',
    fields: 'Eventos, incidencias y notificaciones.',
  },
  {
    name: 'auditorias',
    fields: 'Cambios y acciones administrativas.',
  },
  {
    name: 'configuraciones',
    fields: 'Parámetros y reglas del sistema.',
  },
];

const requirements = {
  funcionales: [
    'Registrar usuarios.',
    'Validar accesos.',
    'Gestionar visitantes.',
    'Generar reportes.',
    'Enviar alertas.',
    'Consultar historiales.',
  ],
  noFuncionales: [
    'Respuesta rápida.',
    'Alta disponibilidad.',
    'Interfaz responsiva.',
    'Protección de datos.',
  ],
};

const reports = [
  'Ingresos y salidas.',
  'Distribución por tipo de usuario.',
  'Horarios de mayor flujo.',
  'Intentos fallidos.',
  'Ocupación en tiempo real.',
  'Tendencias mensuales y anuales.',
];

const futureImprovements = [
  'Reconocimiento facial.',
  'Aplicación móvil.',
  'Notificaciones avanzadas.',
  'Analítica predictiva.',
  'Nuevas integraciones institucionales.',
];

function Icon({ name }) {
  const icons = {
    users: <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm6 2a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM3 19a6 6 0 0 1 12 0m1 0a5 5 0 0 1 5-5 5 5 0 0 1 0 10" />,
    shield: <path d="M12 3 5 6v6c0 5 3.4 8.4 7 9 3.6-.6 7-4 7-9V6l-7-3Zm0 5v8m-3-3 3 3 3-3" />,
    scan: <path d="M7 4H5a1 1 0 0 0-1 1v2m16 0V5a1 1 0 0 0-1-1h-2M4 17v2a1 1 0 0 0 1 1h2m10 0h2a1 1 0 0 0 1-1v-2M7 12h10" />,
    server: <path d="M5 6h14v4H5Zm0 8h14v4H5Zm3-6h.01M8 16h.01" />,
    monitor: <path d="M4 5h16v11H4Zm5 15h6m-5-4v4m4-4v4" />,
    database: <path d="M12 5c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3Zm-8 7c0 1.7 3.6 3 8 3s8-1.3 8-3m-16 4c0 1.7 3.6 3 8 3s8-1.3 8-3" />,
    cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v18m8-13.5-8 4.5-8-4.5" />,
    layout: <path d="M4 5h16v14H4Zm0 5h16M9 5v14" />,
    flow: <path d="M7 7h4v4H7Zm6 6h4v4h-4ZM11 9h2a3 3 0 0 1 3 3v1" />,
    lock: <path d="M7 11h10v9H7Zm2 0V8a3 3 0 1 1 6 0v3" />,
    sync: <path d="M20 7v5h-5m-10 5v-5h5m9.5-1A7 7 0 0 0 8 6.5M4.5 13A7 7 0 0 0 16 17.5" />,
    plug: <path d="M9 7v5m6-5v5M8 12h8v2a4 4 0 0 1-4 4v3" />,
    id: <path d="M4 6h16v12H4Zm4 3h7m-7 3h4m5-3h.01m0 3h.01" />,
    fingerprint: <path d="M12 4a6 6 0 0 1 6 6c0 5-2 8-4 10m-2-8v4m-4-2a4 4 0 0 1 8 0c0 2-.4 4.2-1.5 6M6 11a6 6 0 0 1 12 0" />,
    gate: <path d="M7 4h10v16H7Zm5 0v16M4 10h3m10 0h3" />,
    visitor: <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0m2-11h-4m2-2v4" />,
    alarm: <path d="M12 6a6 6 0 0 1 6 6v3l2 2H4l2-2v-3a6 6 0 0 1 6-6Zm0-2v2m-3 15h6" />,
    chart: <path d="M5 19V9m7 10V5m7 14v-7M3 19h18" />,
    arrowLeft: <path d="M15 18l-6-6 6-6M9 12h10" />,
    arrowRight: <path d="M9 18l6-6-6-6m6 6H5" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      {icons[name]}
    </svg>
  );
}

function SenaLogo() {
  return (
    <div className="sena-logo" aria-label="Logo AIP SENA">
      <img src={senaLogo} alt="Logo AIP SENA" className="sena-logo-image" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('forward');
  const [surfaceStyle, setSurfaceStyle] = useState({
    '--pointer-x': '50%',
    '--pointer-y': '50%',
  });
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 'inicio',
      label: 'Inicio',
      eyebrow: 'SENA Regional Caldas',
      title: 'A.I.P.',
      subtitle: 'Automatizacion de Ingreso Peatonal',
      layout: 'hero',
      content: (
        <div className="hero-layout">
          <div className="hero-copy slide-enter">
            <SenaLogo />
            <h2>Automatizacion de Ingreso Peatonal</h2>
            <p className="hero-text">
              Control de ingreso para el SENA Regional Caldas con autenticación segura,
              registro automático y trazabilidad.
            </p>
            <div className="hero-support">
              <ul className="hero-points">
                <li>Ingreso más rápido.</li>
                <li>Registros consultables.</li>
                <li>Base para reportes e integraciones.</li>
              </ul>
            </div>
            <div className="team-section">
              <h3>Equipo de desarrollo</h3>
              <ul className="team-members">
                <li>Jimmy Alexander Hurtado Montaño</li>
                <li>Juan José Valencia Pelaes</li>
                <li>Salomé Rodríguez Rios</li>
                <li>Federico Marín Cardona</li>
              </ul>
            </div>
            <div className="hero-tags">
              <span>Laravel</span>
              <span>Bootstrap</span>
              <span>MySQL</span>
              <span>Seguridad institucional</span>
            </div>
          </div>
          <div className="hero-side slide-enter slide-delay-1">
            <article className="signal-card hero-summary-card">
              <div className="signal-top">
                <span className="pulse-dot" />
                <p>Resumen del proyecto</p>
              </div>
              <h3>Acceso seguro y centralizado</h3>
              <ul>
                <li>Usuarios, personal y visitantes.</li>
                <li>Biometría, QR y torniquetes.</li>
                <li>Historial para consulta y auditoría.</li>
              </ul>
            </article>
            <article className="mini-card indicators-card hero-summary-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="scan" />
                </div>
                <h3>Indicadores clave</h3>
              </div>
              <div className="indicator-list">
                {quickStats.map((item) => (
                  <div className="indicator-item" key={item.label}>
                    <div className="icon-badge small">
                      <Icon name={item.icon} />
                    </div>
                    <div>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <div className="hero-overview">
              <article className="mini-card">
                <div className="card-heading">
                  <div className="icon-badge small">
                    <Icon name="shield" />
                  </div>
                  <h3>Propósito</h3>
                </div>
                <p>
                  Validación segura, registro automático y seguimiento institucional.
                </p>
              </article>
              <article className="mini-card">
                <div className="card-heading">
                  <div className="icon-badge small">
                    <Icon name="chart" />
                  </div>
                  <h3>Impacto</h3>
                </div>
                <p>
                  Menos procesos manuales y mejores datos para decidir.
                </p>
              </article>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'objetivo',
      label: 'Objetivo',
      eyebrow: 'Visión del proyecto',
      title: 'Descripción general y objetivo',
      subtitle: 'Plataforma web para automatizar el ingreso peatonal y apoyar la gestión institucional.',
      content: (
        <div className="objective-slide slide-stack objective-intro-slide">
          <div className="objective-main slide-enter">
            <article className="glass-card">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="shield" />
                </div>
                <h3>Objetivo general</h3>
              </div>
              <p>
                Automatizar el ingreso peatonal con información clara para seguridad y
                administración.
              </p>
            </article>
            <div className="objective-highlights">
              <article className="mini-card">
                <div className="card-heading">
                  <div className="icon-badge small">
                    <Icon name="scan" />
                  </div>
                  <h3>Operación en tiempo real</h3>
                </div>
                <p>Registrar accesos y validar identidades al instante.</p>
              </article>
              <article className="mini-card">
                <div className="card-heading">
                  <div className="icon-badge small">
                    <Icon name="chart" />
                  </div>
                  <h3>Valor para la gestión</h3>
                </div>
                <p>Convertir registros en indicadores útiles.</p>
              </article>
            </div>
          </div>
          <div className="objective-summary slide-enter slide-delay-1">
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="users" />
                </div>
                <h3>Cobertura</h3>
              </div>
              <p>Aprendices, personal y visitantes.</p>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="plug" />
                </div>
                <h3>Integración</h3>
              </div>
              <p>Biometría, torniquetes y QR.</p>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="lock" />
                </div>
                <h3>Cumplimiento</h3>
              </div>
              <p>Seguridad y protección de datos.</p>
            </article>
          </div>
        </div>
      ),
    },
    {
      id: 'objetivos-especificos',
      label: 'Objetivos',
      eyebrow: 'Visión del proyecto',
      title: 'Objetivos específicos',
      subtitle: 'Acciones concretas que guían el desarrollo del sistema A.I.P.',
      content: (
        <div className="objective-detail-slide slide-stack focused-slide">
          <article className="glass-card objective-side slide-enter">
            <div className="card-heading">
              <div className="icon-badge">
                <Icon name="chart" />
              </div>
              <h3>Ruta de trabajo</h3>
            </div>
            <div className="objective-groups">
              <div className="objective-group">
                <h4>Control y operacion</h4>
                <ul className="feature-list objective-list">
                  {objectives.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="objective-group">
                <h4>Analítica y seguridad</h4>
                <ul className="feature-list objective-list">
                  {objectives.slice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      ),
    },
    {
      id: 'tecnologias',
      label: 'Tecnologias',
      eyebrow: 'Stack tecnológico',
      title: 'Tecnologías utilizadas',
      subtitle: 'Herramientas seleccionadas para construir una solución web escalable, segura e interactiva.',
      content: (
        <div className="tech-slide slide-stack">
          <section className="tech-overview slide-enter">
            <article className="glass-card tech-overview-card">
              <div className="tech-overview-copy">
                <div className="card-heading">
                  <div className="icon-badge">
                    <Icon name="server" />
                  </div>
                  <h3>Panorama del stack</h3>
                </div>
                <p>
                  La solución se divide en backend, frontend y datos para una arquitectura
                  clara y escalable.
                </p>
              </div>
              <div className="tech-badges">
                <span className="tech-badge">Backend: Laravel + PHP</span>
                <span className="tech-badge">Frontend: Bootstrap + JavaScript</span>
                <span className="tech-badge">Datos: MySQL + Servidor web</span>
              </div>
            </article>
          </section>
          <div className="tech-grid compact-grid slide-enter slide-delay-1">
            {technologies.map((group, index) => (
              <article className="glass-card tech-card" style={{ animationDelay: `${index * 0.12}s` }} key={group.title}>
                <div className="tech-card-top">
                  <div className="card-heading">
                    <div className="icon-badge">
                      <Icon name={group.icon} />
                    </div>
                    <div>
                      <h3>{group.title}</h3>
                      <p className="tech-card-description">{group.description}</p>
                    </div>
                  </div>
                </div>
                <div className="tech-stack-list">
                  {group.items.map((item) => (
                    <article key={item.label} className="tech-stack-item">
                      {item.logo && <img src={item.logo} alt={item.alt} className="inline-tech-logo" />}
                      <span>{item.label}</span>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'arquitectura',
      label: 'Arquitectura',
      eyebrow: 'Diseño del sistema',
      title: 'Arquitectura MVC e integraciones',
      subtitle: 'Arquitectura modular basada en MVC para facilitar mantenimiento, escalabilidad y reutilización.',
      content: (
        <div className="architecture-slide slide-stack">
          <section className="architecture-flow slide-enter">
            {architecture.slice(0, 3).map((item, index) => (
              <article className="glass-card architecture-step" style={{ animationDelay: `${index * 0.08}s` }} key={item.title}>
                <div className="card-heading">
                  <div className="icon-badge">
                    <Icon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </section>
          <section className="architecture-support slide-enter slide-delay-1">
            {architecture.slice(3).map((item, index) => (
              <article className="mini-card" style={{ animationDelay: `${index * 0.08}s` }} key={item.title}>
                <div className="icon-badge small">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </section>
        </div>
      ),
    },
    {
      id: 'modulos-acceso',
      label: 'Acceso',
      eyebrow: 'Operación principal',
      title: 'Módulos de acceso',
      subtitle: 'Funciones que validan, autorizan y registran el ingreso peatonal.',
      content: (
        <div className="modules-slide slide-stack focused-slide">
          <section className="modules-group slide-enter">
            <div className="modules-group-title">
              <span>Operación de acceso</span>
              <p>Validación, autorización y control de ingreso.</p>
            </div>
            <div className="modules-grid primary">
              {modules.slice(0, 4).map((item, index) => (
                <article className="glass-card" style={{ animationDelay: `${index * 0.08}s` }} key={item.title}>
                  <div className="card-heading">
                    <div className="icon-badge">
                      <Icon name={item.icon} />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ),
    },
    {
      id: 'modulos-supervision',
      label: 'Supervision',
      eyebrow: 'Operación principal',
      title: 'Supervisión y control',
      subtitle: 'Funciones para monitorear eventos, revisar historiales y tomar decisiones.',
      content: (
        <div className="modules-slide slide-stack focused-slide">
          <section className="modules-group slide-enter">
            <div className="modules-group-title">
              <span>Supervisión y administración</span>
              <p>Monitoreo, analítica y control institucional.</p>
            </div>
            <div className="modules-grid secondary">
              {modules.slice(4).map((item, index) => (
                <article className="glass-card" style={{ animationDelay: `${index * 0.08}s` }} key={item.title}>
                  <div className="card-heading">
                    <div className="icon-badge">
                      <Icon name={item.icon} />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ),
    },
    {
      id: 'datos-identidad',
      label: 'Identidad',
      eyebrow: 'Datos y control',
      title: 'Datos de identidad y acceso',
      subtitle: 'Tablas principales para personas, roles, visitantes y movimientos.',
      content: (
        <div className="data-slide slide-stack focused-slide">
          <section className="data-group slide-enter">
            <div className="data-group-title">
              <span>Identidad y acceso</span>
              <p>Perfiles, roles y movimientos de ingreso.</p>
            </div>
            <div className="data-grid primary">
              {databaseTables.slice(0, 4).map((table, index) => (
                <article className="table-card" style={{ animationDelay: `${index * 0.08}s` }} key={table.name}>
                  <h3>{table.name}</h3>
                  <p>{table.fields}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ),
    },
    {
      id: 'datos-seguridad',
      label: 'Infraestructura',
      eyebrow: 'Datos y control',
      title: 'Datos de seguridad e infraestructura',
      subtitle: 'Tablas para dispositivos, alertas, auditoría y configuración.',
      content: (
        <div className="data-slide slide-stack focused-slide">
          <section className="data-group slide-enter">
            <div className="data-group-title">
              <span>Infraestructura y seguridad</span>
              <p>Dispositivos, alertas, auditoría y configuración.</p>
            </div>
            <div className="data-grid secondary">
              {databaseTables.slice(4).map((table, index) => (
                <article className="table-card" style={{ animationDelay: `${index * 0.08}s` }} key={table.name}>
                  <h3>{table.name}</h3>
                  <p>{table.fields}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ),
    },
    {
      id: 'workbench',
      label: 'Workbench',
      eyebrow: 'Modelo de datos',
      title: 'Modelo en MySQL Workbench',
      subtitle: 'Relaciones principales de la base de datos.',
      layout: 'image',
      content: (
        <div className="workbench-slide slide-stack workbench-only">
          <div className="workbench-title slide-enter">
            <span>Modelo de datos</span>
            <h2>MySQL Workbench</h2>
            <p>Relaciones principales de la base de datos.</p>
          </div>
          <article className="workbench-frame slide-enter">
            <img src={workbenchFit} alt="Vista del modelo en MySQL Workbench" />
          </article>
        </div>
      ),
    },
    {
      id: 'requisitos',
      label: 'Requisitos',
      eyebrow: 'Criterios del proyecto',
      title: 'Requisitos del sistema',
      subtitle: 'Lo que debe hacer la plataforma y las condiciones para funcionar bien.',
      content: (
        <div className="security-slide slide-stack">
          <section className="security-top slide-enter">
            <article className="glass-card">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="scan" />
                </div>
                <h3>Requisitos funcionales</h3>
              </div>
              <div className="security-list-columns">
                <ul className="feature-list">
                  {requirements.funcionales.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="feature-list">
                  {requirements.funcionales.slice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="glass-card">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="shield" />
                </div>
                <h3>Requisitos no funcionales</h3>
              </div>
              <div className="security-list-columns">
                <ul className="feature-list">
                  {requirements.noFuncionales.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="feature-list">
                  {requirements.noFuncionales.slice(3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </section>
        </div>
      ),
    },
    {
      id: 'seguridad',
      label: 'Seguridad',
      eyebrow: 'Criterios del proyecto',
      title: 'Seguridad y protección de datos',
      subtitle: 'Controles para proteger información, credenciales y eventos del sistema.',
      content: (
        <div className="security-slide slide-stack focused-slide">
          <section className="security-bottom slide-enter">
            <article className="mini-card security-core">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="alarm" />
                </div>
                <h3>Controles de seguridad</h3>
              </div>
              <ul className="feature-list">
                <li>Roles y permisos.</li>
                <li>Credenciales protegidas.</li>
                <li>Conexiones seguras.</li>
                <li>Auditoria de eventos.</li>
              </ul>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="lock" />
                </div>
                <h3>Protección de datos</h3>
              </div>
              <p>
                Resguardo de información personal e institucional.
              </p>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="chart" />
                </div>
                <h3>Monitoreo y reportes</h3>
              </div>
              <p>
                Seguimiento de eventos, intentos fallidos e indicadores.
              </p>
            </article>
          </section>
        </div>
      ),
    },
    {
      id: 'reportes',
      label: 'Reportes',
      eyebrow: 'Analítica',
      title: 'Dashboards y crecimiento',
      subtitle: 'La información registrada se convierte en indicadores y nuevas oportunidades.',
      content: (
        <div className="closing-stack">
          <div className="two-column compact-grid slide-stack">
            <article className="glass-card slide-enter">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="chart" />
                </div>
                <h3>Reportes clave</h3>
              </div>
              <ul className="feature-list">
                {reports.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card slide-enter slide-delay-1">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="sync" />
                </div>
                <h3>Mejoras futuras</h3>
              </div>
              <ul className="feature-list">
                {futureImprovements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      ),
    },
    {
      id: 'cierre',
      label: 'Cierre',
      eyebrow: 'Proyección',
      title: 'Conclusión',
      subtitle: 'A.I.P. fortalece el control institucional con automatización, seguridad y datos claros.',
      content: (
        <div className="closing-stack">
          <section className="closing final-closing slide-enter">
            <p className="eyebrow">Conclusión</p>
            <h2>Automatiza el ingreso, fortalece la seguridad y aporta información para decidir</h2>
            <p>
              A.I.P. integra automatización, seguridad, dispositivos físicos y analítica
              para mejorar el control institucional.
            </p>
          </section>
        </div>
      ),
    },
  ];

  const currentSlide = slides[activeSlide];

  const goToSlide = (index) => {
    setTransitionDirection(index > activeSlide ? 'forward' : 'backward');
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setTransitionDirection('forward');
    setActiveSlide((current) => Math.min(current + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setTransitionDirection('backward');
    setActiveSlide((current) => Math.max(current - 1, 0));
  };

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setSurfaceStyle({
      '--pointer-x': `${Math.max(0, Math.min(100, x))}%`,
      '--pointer-y': `${Math.max(0, Math.min(100, y))}%`,
    });
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 55) {
      return;
    }

    if (deltaX < 0) {
      nextSlide();
      return;
    }

    prevSlide();
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        setTransitionDirection('forward');
        setActiveSlide((current) => Math.min(current + 1, slides.length - 1));
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        setTransitionDirection('backward');
        setActiveSlide((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slides.length]);

  return (
    <main className="presentation" style={surfaceStyle}>
      <section className="slide-shell">
        <header className="topbar">
          <div className="topbar-copy">
            <p className="eyebrow compact">{currentSlide.eyebrow}</p>
            <strong>{currentSlide.label}</strong>
            <small>Presentación interactiva del sistema A.I.P.</small>
          </div>
          <nav className="map-trail" aria-label="Ruta de la presentación">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                className={`trail-stop ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span>{slide.label}</span>
              </button>
            ))}
          </nav>
          <div className="slide-counter">
            <span>{String(activeSlide + 1).padStart(2, '0')}</span>
            <small>/ {String(slides.length).padStart(2, '0')}</small>
          </div>
        </header>

        <article
          key={currentSlide.id}
          className={`slide-card ${currentSlide.layout === 'hero' ? 'hero-slide' : ''} ${currentSlide.layout === 'image' ? 'image-slide' : ''} slide-shift-${transitionDirection}`}
          onPointerMove={handlePointerMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="map-overlay" aria-hidden="true">
            <span className="map-ring ring-one" />
            <span className="map-ring ring-two" />
            <span className="map-ring ring-three" />
            <span className="map-grid-bg" />
            <span className="map-spotlight" />
          </div>
          {currentSlide.layout !== 'hero' && currentSlide.layout !== 'image' && (
            <SectionTitle
              eyebrow={currentSlide.eyebrow}
              title={currentSlide.title}
              text={currentSlide.subtitle}
            />
          )}
          {currentSlide.content}
        </article>

        <footer className="slide-controls">
          <button type="button" className="nav-button secondary" onClick={prevSlide}>
            <Icon name="arrowLeft" />
            <span>Anterior</span>
          </button>
          <button type="button" className="nav-button primary" onClick={nextSlide}>
            <span>Siguiente</span>
            <Icon name="arrowRight" />
          </button>
        </footer>
      </section>
    </main>
  );
}

export default App;
