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
import phpMyAdminLogo from './imgs/PhpMyAdmin.png';
import apacheLogo from './imgs/apahe.png';

const quickStats = [
  { icon: 'users', value: 'Multiacceso', label: 'aprendices, personal y visitantes' },
  { icon: 'scan', value: 'Tiempo real', label: 'registro y trazabilidad continua' },
];

const objectives = [
  'Registrar y administrar informacion personal, academica y de seguridad.',
  'Validar la identidad mediante multiples metodos de autenticacion.',
  'Registrar en tiempo real entradas y salidas.',
  'Administrar visitantes y permisos temporales.',
  'Generar reportes y graficos estadisticos.',
  'Detectar y notificar eventos de seguridad.',
  'Integrar el software con dispositivos fisicos de control de acceso.',
  'Proteger la informacion conforme a la legislacion de proteccion de datos.',
];

const technologies = [
  {
    icon: 'server',
    title: 'Backend',
    description: 'Gestiona la logica del sistema, la seguridad operativa y la integracion con servicios institucionales.',
    items: [
      { label: 'Laravel MVC', logo: laravelLogo, alt: 'Laravel' },
      { label: 'PHP 8.x', logo: phpLogo, alt: 'PHP' },
      { label: 'APIs REST', logo: apiLogo, alt: 'API REST' },
    ],
  },
  {
    icon: 'monitor',
    title: 'Frontend',
    description: 'Construye una experiencia visual agil, responsiva y preparada para paneles, consultas y reportes.',
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
    description: 'Centraliza la informacion, facilita la administracion y soporta el despliegue del entorno web.',
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
    text: 'Gestiona las entidades del sistema, las reglas de negocio y la relacion con la base de datos para mantener la informacion organizada y consistente.',
  },
  {
    icon: 'layout',
    title: 'Vista',
    text: 'Presenta interfaces claras para vigilancia, administracion y consulta, facilitando el uso del sistema por distintos perfiles institucionales.',
  },
  {
    icon: 'flow',
    title: 'Controlador',
    text: 'Recibe solicitudes, valida datos y coordina la comunicacion entre vistas y modelo para ejecutar correctamente cada operacion.',
  },
  {
    icon: 'lock',
    title: 'Modularidad',
    text: 'Divide la solucion en componentes independientes que simplifican mantenimiento, crecimiento funcional y reutilizacion del codigo.',
  },
  {
    icon: 'plug',
    title: 'Integracion',
    text: 'Permite conectar lectores biometricos, torniquetes, codigos QR y servicios externos para ampliar el control de acceso.',
  },
  {
    icon: 'sync',
    title: 'Centralizacion',
    text: 'Reune registros, validaciones y seguimiento operativo en una sola plataforma web para mejorar supervision y trazabilidad.',
  },
];

const modules = [
  {
    icon: 'id',
    title: 'Gestion de Usuarios',
    text: 'Administra estudiantes, instructores, administrativos y visitantes, incluyendo sus datos personales, roles y estados de acceso.',
  },
  {
    icon: 'fingerprint',
    title: 'Autenticacion',
    text: 'Valida la identidad mediante huella, QR, carne o PIN para asegurar ingresos confiables y reducir suplantaciones.',
  },
  {
    icon: 'gate',
    title: 'Control de Acceso',
    text: 'Autoriza o bloquea el ingreso segun reglas del sistema y registra cada movimiento con fecha, hora y resultado.',
  },
  {
    icon: 'visitor',
    title: 'Gestion de Visitantes',
    text: 'Controla permisos temporales, autorizaciones especiales y seguimiento de personas externas dentro de la institucion.',
  },
  {
    icon: 'alarm',
    title: 'Seguridad y Alertas',
    text: 'Detecta intentos fallidos, eventos inusuales y genera notificaciones para una reaccion rapida del personal responsable.',
  },
  {
    icon: 'chart',
    title: 'Reportes y Estadisticas',
    text: 'Presenta dashboards con graficos, indicadores y consultas para analizar flujos de ingreso y comportamiento institucional.',
  },
  {
    icon: 'shield',
    title: 'Auditoria',
    text: 'Registra cambios, acciones administrativas e historial operativo para fortalecer el control, la trazabilidad y la supervision.',
  },
];

const databaseTables = [
  {
    name: 'usuarios',
    fields: 'Informacion personal, academica y de seguridad de aprendices, instructores, administrativos y otros perfiles autorizados.',
  },
  {
    name: 'roles',
    fields: 'Perfiles, privilegios y reglas de acceso que determinan funciones, permisos y alcance operativo dentro del sistema.',
  },
  {
    name: 'accesos',
    fields: 'Fecha, hora, metodo de validacion, resultado del ingreso y trazabilidad completa de cada movimiento registrado.',
  },
  {
    name: 'visitantes',
    fields: 'Permisos temporales, autorizaciones especiales, motivo de ingreso y seguimiento de personas externas a la institucion.',
  },
  {
    name: 'dispositivos',
    fields: 'Lectores biometricos, torniquetes, puntos de acceso y configuraciones asociadas a la infraestructura fisica.',
  },
  {
    name: 'alertas',
    fields: 'Eventos de seguridad, intentos fallidos, incidencias operativas y notificaciones generadas por el sistema.',
  },
  {
    name: 'auditorias',
    fields: 'Historial administrativo, cambios realizados y evidencias de acciones para control, supervision y seguimiento.',
  },
  {
    name: 'configuraciones',
    fields: 'Parametros operativos, reglas generales y ajustes que permiten adaptar el sistema a las necesidades institucionales.',
  },
];

const requirements = {
  funcionales: [
    'Registrar usuarios y actualizar sus datos.',
    'Validar accesos mediante multiples metodos.',
    'Gestionar visitantes y permisos temporales.',
    'Generar reportes operativos e institucionales.',
    'Exportar informacion para analisis y seguimiento.',
    'Enviar alertas ante eventos de seguridad.',
    'Consultar historiales de ingreso y movimientos.',
    'Administrar roles, permisos y niveles de acceso.',
  ],
  noFuncionales: [
    'Tiempo de respuesta menor a cinco segundos.',
    'Soporte para miles de accesos diarios.',
    'Interfaz intuitiva, clara y responsiva.',
    'Proteccion de datos personales e institucionales.',
    'Alta disponibilidad y continuidad operativa.',
    'Escalabilidad tecnologica para crecimiento futuro.',
  ],
};

const reports = [
  'Ingresos y salidas.',
  'Distribucion por tipo de usuario.',
  'Horarios de mayor flujo.',
  'Intentos fallidos.',
  'Ocupacion en tiempo real.',
  'Tendencias mensuales y anuales.',
];

const futureImprovements = [
  'Reconocimiento facial.',
  'Aplicacion movil.',
  'Notificaciones avanzadas.',
  'Analitica predictiva.',
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
              Sistema de informacion para automatizar y optimizar el control de acceso al SENA
              Regional Caldas mediante autenticacion segura, registro automatico y trazabilidad.
            </p>
            <div className="hero-support">
              <p className="hero-support-text">
                Centraliza usuarios, validaciones y eventos de ingreso en una experiencia mas rapida
                para vigilancia, administracion y seguimiento institucional.
              </p>
              <ul className="hero-points">
                <li>Validacion unificada para personal, aprendices y visitantes.</li>
                <li>Monitoreo continuo con registros listos para consulta y auditoria.</li>
                <li>Base tecnologica preparada para crecer con reportes e integraciones fisicas.</li>
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
            <div className="hero-panel">
              <div className="signal-card">
                <div className="signal-top">
                  <span className="pulse-dot" />
                  <p>Estado del sistema</p>
                </div>
                <h3>Acceso seguro y centralizado</h3>
                <ul>
                  <li>Gestiona aprendices, instructores, administrativos, contratistas y visitantes.</li>
                  <li>Integra lectores biometricos, torniquetes y camaras de seguridad.</li>
                  <li>Genera historial completo para administradores y personal de seguridad.</li>
                </ul>
              </div>
            </div>
            <article className="mini-card indicators-card">
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
          </div>
          <div className="hero-overview slide-enter slide-delay-2">
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="shield" />
                </div>
                <h3>Proposito</h3>
              </div>
              <p>
                Controlar el ingreso peatonal con validacion segura, registro automatico y
                seguimiento institucional en una sola plataforma web.
              </p>
              <ul className="hero-detail-list">
                <li>Reduce tiempos de verificacion en puntos de acceso.</li>
                <li>Facilita decisiones operativas para vigilancia y administracion.</li>
              </ul>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="chart" />
                </div>
                <h3>Impacto</h3>
              </div>
              <p>
                Reduce procesos manuales y mejora la consulta de historiales, reportes y
                trazabilidad para el control institucional diario.
              </p>
              <ul className="hero-detail-list">
                <li>Fortalece la seguridad con evidencia organizada y accesible.</li>
                <li>Prepara la base para dashboards, alertas y crecimiento futuro.</li>
              </ul>
            </article>
          </div>
        </div>
      ),
    },
    {
      id: 'objetivo',
      label: 'Objetivo',
      eyebrow: 'Vision del proyecto',
      title: 'Descripcion general y objetivo',
      subtitle: 'Plataforma web para automatizar el ingreso peatonal y apoyar la gestion institucional.',
      content: (
        <div className="objective-slide slide-stack">
          <div className="objective-main slide-enter">
            <article className="glass-card">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="shield" />
                </div>
                <h3>Objetivo general</h3>
              </div>
              <p>
                Disenar e implementar una plataforma web que automatice el registro y control del
                ingreso peatonal, reduzca tiempos de espera y proporcione informacion estadistica.
              </p>
            </article>
            <div className="objective-highlights">
              <article className="mini-card">
                <div className="card-heading">
                  <div className="icon-badge small">
                    <Icon name="scan" />
                  </div>
                  <h3>Operacion en tiempo real</h3>
                </div>
                <p>Registrar accesos, validar identidades y mantener trazabilidad continua del ingreso institucional.</p>
              </article>
              <article className="mini-card">
                <div className="card-heading">
                  <div className="icon-badge small">
                    <Icon name="chart" />
                  </div>
                  <h3>Valor para la gestion</h3>
                </div>
                <p>Convertir los registros diarios en reportes, indicadores y apoyo para la toma de decisiones.</p>
              </article>
            </div>
          </div>
          <article className="glass-card objective-side slide-enter slide-delay-1">
            <div className="card-heading">
              <div className="icon-badge">
                <Icon name="chart" />
              </div>
              <h3>Objetivos especificos</h3>
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
                <h4>Analitica y seguridad</h4>
                <ul className="feature-list objective-list">
                  {objectives.slice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          <div className="objective-summary slide-enter slide-delay-2">
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="users" />
                </div>
                <h3>Cobertura</h3>
              </div>
              <p>Incluye aprendices, instructores, personal administrativo, seguridad y visitantes.</p>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="plug" />
                </div>
                <h3>Integracion</h3>
              </div>
              <p>Se articula con lectores biometricos, torniquetes, QR y otros dispositivos fisicos.</p>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="lock" />
                </div>
                <h3>Cumplimiento</h3>
              </div>
              <p>Protege la informacion institucional conforme a lineamientos de seguridad y datos personales.</p>
            </article>
          </div>
        </div>
      ),
    },
    {
      id: 'tecnologias',
      label: 'Tecnologias',
      eyebrow: 'Stack tecnologico',
      title: 'Tecnologias utilizadas',
      subtitle: 'Herramientas seleccionadas para construir una solucion web escalable, segura e interactiva.',
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
                  La solucion se apoya en tres frentes: backend para la logica del sistema,
                  frontend para la experiencia de uso y datos para la administracion e infraestructura.
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
      eyebrow: 'Diseno del sistema',
      title: 'Arquitectura MVC e integraciones',
      subtitle: 'Arquitectura modular basada en MVC para facilitar mantenimiento, escalabilidad y reutilizacion.',
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
      id: 'modulos',
      label: 'Modulos',
      eyebrow: 'Operacion principal',
      title: 'Modulos del sistema',
      subtitle: 'Componentes funcionales para control de ingreso, supervision, seguridad y administracion.',
      content: (
        <div className="modules-slide slide-stack">
          <section className="modules-group slide-enter">
            <div className="modules-group-title">
              <span>Operacion de acceso</span>
              <p>Funciones que intervienen directamente en la validacion, autorizacion y control de ingreso.</p>
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
          <section className="modules-group slide-enter slide-delay-1">
            <div className="modules-group-title">
              <span>Supervision y administracion</span>
              <p>Funciones orientadas a monitoreo, analitica y control institucional del sistema.</p>
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
      id: 'datos',
      label: 'Datos',
      eyebrow: 'Datos y control',
      title: 'Estructura de base de datos e informacion',
      subtitle: 'La plataforma almacena entidades y variables clave para control historico y trazabilidad.',
      content: (
        <div className="data-slide slide-stack">
          <section className="data-group slide-enter">
            <div className="data-group-title">
              <span>Identidad y acceso</span>
              <p>Tablas que soportan los perfiles de usuario, roles y movimientos de ingreso.</p>
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
          <section className="data-group slide-enter slide-delay-1">
            <div className="data-group-title">
              <span>Infraestructura y seguridad</span>
              <p>Tablas orientadas a dispositivos, alertas, auditoria y configuracion operativa.</p>
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
      id: 'seguridad',
      label: 'Seguridad',
      eyebrow: 'Criterios del proyecto',
      title: 'Requisitos, reportes y seguridad',
      subtitle: 'El sistema combina funciones operativas, rendimiento institucional y proteccion de la informacion.',
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
          <section className="security-bottom slide-enter slide-delay-1">
            <article className="mini-card security-core">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="alarm" />
                </div>
                <h3>Controles de seguridad</h3>
              </div>
              <ul className="feature-list">
                <li>Autenticacion segura con gestion de roles y permisos.</li>
                <li>Cifrado de informacion sensible y resguardo de credenciales.</li>
                <li>Conexiones seguras mediante HTTPS y validaciones de acceso.</li>
                <li>Auditoria de eventos, evidencias y cumplimiento institucional.</li>
              </ul>
            </article>
            <article className="mini-card">
              <div className="card-heading">
                <div className="icon-badge small">
                  <Icon name="lock" />
                </div>
                <h3>Proteccion de datos</h3>
              </div>
              <p>
                Resguarda informacion personal, institucional y registros historicos del ingreso
                mediante controles de acceso, manejo responsable de datos y trazabilidad de uso.
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
                Permite seguimiento de eventos, intentos fallidos, analisis de comportamiento
                operativo y generacion de evidencia para toma de decisiones.
              </p>
            </article>
          </section>
        </div>
      ),
    },
    {
      id: 'cierre',
      label: 'Cierre',
      eyebrow: 'Proyeccion',
      title: 'Dashboards, mejoras y conclusion',
      subtitle: 'El sistema esta preparado para crecer con nuevas integraciones y analitica avanzada.',
      content: (
        <div className="closing-stack">
          <div className="two-column compact-grid slide-stack">
            <article className="glass-card slide-enter">
              <div className="card-heading">
                <div className="icon-badge">
                  <Icon name="chart" />
                </div>
                <h3>Dashboards y reportes</h3>
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
                <h3>Escalabilidad futura</h3>
              </div>
              <ul className="feature-list">
                {futureImprovements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <section className="closing slide-enter slide-delay-2">
            <p className="eyebrow">Conclusion</p>
            <h2>Automatiza el ingreso, fortalece la seguridad y aporta informacion para decidir</h2>
            <p>
              A.I.P. es una solucion integral para el control de acceso institucional del SENA,
              combinando automatizacion, seguridad, integracion fisica y analitica estrategica.
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
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setTransitionDirection('backward');
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
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
        setActiveSlide((current) => (current + 1) % slides.length);
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        setTransitionDirection('backward');
        setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
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
            <small>Presentacion interactiva del sistema A.I.P.</small>
          </div>
          <nav className="map-trail" aria-label="Ruta de la presentacion">
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
          className={`slide-card ${currentSlide.layout === 'hero' ? 'hero-slide' : ''} slide-shift-${transitionDirection}`}
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
          {currentSlide.layout !== 'hero' && (
            <SectionTitle
              eyebrow={currentSlide.eyebrow}
              title={currentSlide.title}
              text={currentSlide.subtitle}
            />
          )}
          {currentSlide.content}
        </article>

        <footer className="slide-controls">
          <div className="swipe-hint">Desliza en movil o usa las flechas para navegar</div>
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
