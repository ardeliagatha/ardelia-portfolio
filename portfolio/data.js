/* =====================================================================
   EDIT YOUR CONTENT HERE. The whole page is built from this object.
   IMAGES: put image files in the "images" folder, then write the path,
   e.g. "images/bpmn-asis.png". Where an image is missing, the page shows
   a dashed box telling you which file to add.
   ===================================================================== */
const DATA = {
  name: "Ardelia Luthfi Agata",
  email: "ardeliagatha2@gmail.com",
  linkedin: "https://www.linkedin.com/in/ardeliagatha",
  cv: "cv.pdf",
  photo: "images/profile.jpg",

  hero: {
    tag: "Open to Business & System Analyst roles",
    title: "Turning business needs into <em>effective</em> system solutions.",
    text: "Hi, I'm Ardelia Luthfi Agata, an Information Systems graduate interested in Business Analysis, System Analysis, and ERP solutions.",
    small: "Based in Central Java, Indonesia · Open to opportunities",
    badge1: { big: "3.86", small: "GPA · Cum Laude" }
  },

  about: [
    "I am an Information Systems graduate from Telkom University with interests in Business Analysis, System Analysis, and ERP solutions, particularly in connecting business needs with effective technology solutions.",
    "My experience includes analyzing business processes, identifying gaps between documented workflows and actual operations, gathering stakeholder requirements, and translating findings into system specifications and designs. Through my internship and academic projects, I have applied business process modeling, system documentation, and interface design to address operational needs.",
    "I have also worked on an inventory management system and explored enterprise technologies such as SAP and Odoo. With a combination of analytical thinking, process improvement, and system design skills, I aim to contribute to practical solutions that improve business workflows and support organizational goals."
  ],
  focus: [
    { c:"mint",  t:"Business Analysis", d:"Business process improvement, stakeholder needs, requirements gathering" },
    { c:"sky",   t:"System Analysis",   d:"System requirements, BPMN, UML, functional specifications" },
    { c:"peach", t:"ERP Solutions",     d:"SAP, SCM processes, Odoo ERP" }
  ],

  // skills: "project" = index of the project in the list below (0 = first); that makes "Applied in" clickable
  skills: [
    { ic:"process", bg:"sky", t:"Business Process Analysis", d:"Analyzing business workflows, identifying process gaps, and developing process improvement recommendations.",
      tags:["BPMN","As-Is / To-Be Process","Process Improvement","Visual Paradigm","Bizagi Modeler"],
      applied:"Business Process Modeling — PT Kiat Ananda Group (2024)", project:0 },
    { ic:"system", bg:"lav", t:"System Analysis & Design", d:"Analyzing user needs and translating system requirements into structured system models and documentation.",
      tags:["Requirements Analysis","UML","Use Case Diagram","Activity Diagram","Sequence Diagram","Class Diagram","Component Diagram","Deployment Diagram","ERD"],
      applied:"Information System Analysis & Design — PT Kiat Ananda Group (2025)", project:3 },
    { ic:"docs", bg:"butter", t:"Requirements & Documentation", d:"Gathering stakeholder needs and documenting functional requirements to support system development.",
      tags:["Stakeholder Analysis","Functional Requirements","System Documentation","Use Case Description"],
      applied:"PT Solo Murni Internship — PPIC Material Purchase Request System (2025)", project:2 },
    { ic:"erp", bg:"mint", t:"ERP & Enterprise Systems", d:"Exploring enterprise systems and understanding how ERP solutions support business operations.",
      tags:["SAP SCM","Odoo ERP","MySQL"],
      applied:"ERP Hands-on Activities and Inventory Management System Project", project:1 },
    { ic:"ui", bg:"peach", t:"UI/UX & Prototyping", d:"Translating system requirements into interface mockups and prototypes that visualize user workflows.",
      tags:["Figma","Wireframing","Mockups","Prototyping"],
      applied:"PPIC Material Purchase Request System — PT Solo Murni Internship (2025)", project:2 }
  ],
  softSkills: [
    { t:"Analytical Thinking", d:"Breaking down problems to understand their causes and implications." },
    { t:"Problem Solving", d:"Identifying issues and developing practical solutions." },
    { t:"Communication", d:"Explaining ideas clearly and aligning stakeholder needs." },
    { t:"Teamwork", d:"Collaborating effectively to achieve shared goals." },
    { t:"Logical Thinking", d:"Structuring information and reasoning systematically to evaluate problems." },
    { t:"Leadership & Adaptability", d:"Taking responsibility and adapting to changing team needs." }
  ],
  toolbox: [
    { cat:"Business Process & Modeling", items:["Visual Paradigm","Bizagi Modeler","Draw.io"] },
    { cat:"ERP & Database", items:["SAP SCM","Odoo ERP","MySQL"] },
    { cat:"Web & Programming", items:["HTML","CSS","JavaScript","Python","Laravel","GitHub"] },
    { cat:"Productivity & Office", items:["Microsoft Office","Microsoft Excel"] }
  ],
  languages: [ { l:"Indonesian", v:"Native" }, { l:"English", v:"Professional Working Proficiency" } ],

  // color: mint | sky | peach | butter | lav
  // images: [{s:"images/file.png", c:"caption"}]
  projects: [
    { color:"mint", type:"Business Process Analysis", title:"Business Process Analysis and Modeling", sub:"PT Kiat Ananda Group",
      meta:"2024 · Academic Project", tags:["BPMN","Visual Paradigm"],
      summary: "Translated interview findings from four business processes into BPMN diagrams to document existing workflows.",
      overview: "This project focused on understanding and modeling four business processes at PT Kiat Ananda Group: Recruitment, Planning, Loading, and Delivery. Information about existing workflows was gathered through interviews and translated into BPMN diagrams to document how each process operates.",
  analysis: [
    "Conducted interviews to understand the activities and workflows of four business processes",
    "Identified activity sequences and interactions within each process",
    "Translated interview findings into standardized BPMN notation"
  ],
      solution: "Developed BPMN diagrams for each business process using Basic, Advanced, and Choreography modeling, with Visual Paradigm and Draw.io.",
      contribution: "Conducted interviews, analyzed business workflows, and created BPMN diagrams based on the information gathered.",
      outcome: "Produced visual documentation of four business processes, representing their existing workflows through BPMN diagrams.",
      images:[{s:"images/Overview1.png",c:"Overview"},{s:"images/project1.png",c:"BPMN as-is"},{s:"images/project2.jpg",c:"Delivery Process Choreography"}], links:[{label:"View supporting documents (Google Drive)", url:"https://drive.google.com/drive/folders/1Ufs39MkTUdMk8GhkJZcHCyP2uJWLBd_5?usp=sharing"}] },
    { color:"sky", type:"System Analysis & Web Development", title:"Internal Inventory Management System", sub:"Chicken William",
      meta:"2026 · Capstone Project", tags:["System Analysis","SDLC","Waterfall","ERP Inventory Management","Laravel","Python","Figma","UAT"],
      summary:"Developed an internal web-based inventory system to replace manual stock recording and support real-time monitoring of raw material inventory.",
      overview:"Chicken William relied on handwritten records to manage raw material inventory, resulting in stock discrepancies, limited real-time visibility, risks of material shortages, and time-consuming weekly reporting. This project addressed these challenges through the development of an internal web-based inventory management system.",
      analysis: [
    "Analyzed the limitations of manual stock recording, including data discrepancies and the lack of real-time inventory reports",
    "Identified operational issues related to minimum stock monitoring, potential material shortages, and lengthy weekly reporting processes"
  ],
      solution:"Designed and developed an internal inventory management website based on the Inventory Management Module concept in ERP. Applied the Software Development Life Cycle (SDLC) using the Waterfall method, covering requirements analysis, system design, development, testing, implementation, and maintenance.",
      contribution:"Analyzed inventory management needs, designed the user interface in Figma, and contributed to website development using Laravel and Python. Conducted User Acceptance Testing (UAT) to evaluate whether the system met user requirements.",
      outcome:"Delivered a functional internal inventory management website to support digital raw material stock recording and simplify inventory monitoring.",
      images:[{s:"images/Overview2.png",c:"Overview"},{s:"images/p2-1.png",c:"Activity Diagram Flowchart"},{s:"images/p2-2.png",c:"Activity Diagram Flowchart"},{s:"images/p2-3.png",c:"Diagram Class"},{s:"images/p2-4.png",c:"UI Login Chicken William"},{s:"images/p2-5.png",c:"UI Dashboard"},{s:"images/p2-6.png",c:"UI Laporan Stok Real Time"}, ,{s:"images/p2-7.png",c:"UI Transaksi"}], links:[{label:"View supporting documents (Google Drive)", url:"https://drive.google.com/file/d/1v6dLPuAwyCQZKQoiyeqIrhCfnJT_nFKI/view?usp=sharing"}] },
    { color:"peach", type:"UI/UX Design, System & Business Analysis", title:"PPIC Material Purchase Request System", sub:"PT Solo Murni (Kiky Creative Product)",
      meta:"June–August 2025 · Internship", tags:["Business Process Analysis",
    "Stakeholder Analysis",
    "System Requirements",
    "UML",
    "Figma",
    "UI/UX Design"],
      summary:"Analyzed the material purchase request process in the PPIC Division and designed a proposed system to improve workflow efficiency and support material procurement activities.",
      overview:"This project was conducted as part of a practical internship at PT Solo Murni, titled 'Perancangan Desain Antarmuka Sistem Pengajuan Pembelian Bahan Baku Divisi PPIC Menggunakan Figma pada PT Solo Murni.' The project focused on analyzing the existing material purchase request process and designing system interfaces to support material allocation, purchase requests, request monitoring, and approval workflows.",
      analysis: [
    "Conducted stakeholder interviews, discussions, and document reviews to understand the existing material purchase request process",
    "Identified discrepancies between documented workflows and actual practices, along with constraints in manual processes"
  ],
      solution:
    "Prepared system requirements specifications and designed interface mockups for a proposed system covering material allocation, purchase requests, request monitoring by the PPIC MC, and request monitoring and approval by the PPIC Manager.",
  contribution:
    "Analyzed the existing business process, documented functional requirements, prepared Use Case Descriptions, Use Case Diagrams, and Activity Diagrams, and designed 20 interface mockups using Figma across four main system flows.",
      outcome:
    "Produced system requirements documentation and 20 Figma interface mockups covering four main workflows as references for the development team.",
      images:[{s:"images/Overview3.png",c:"Overview"},{s:"images/p3-1.png",c:"Flowchart Divisi PPIC"},{s:"images/p3-2.png",c:"Use Case Diagram"},{s:"images/p3-3.png",c:"Activity Diagram"},{s:"images/p3-4.png",c:"Mockup Figma"},{s:"images/p3-5.png",c:"Mockup Figma"},{s:"images/p3-6.png",c:"Mockup Figma"},{s:"images/p3-7.png",c:"Mockup Figma"},{s:"images/p3-8.png",c:"Mockup Figma"}], links:[{label:"View supporting documents (Google Drive)", url:"https://drive.google.com/file/d/1PFj2CVK9NUjoPqKkqSPnd3BI0zUU0P2L/view?usp=sharing"}] },
    { color:"butter", type:"Business Process Analysis & System Design", title:"Business Process Redesign & Information System Design", sub:"PT Kiat Ananda Group",
      meta:"2025 · Academic Project", tags:["Business Process Analysis","BPMN","UML","System Requirements","UI/UX Design"],
      summary: "Analyzed and redesigned the delivery business process and proposed an information system to improve operational efficiency.",
      overview: "Analyzed the delivery process at PT Kiat Ananda Group to identify operational inefficiencies and propose an information system supporting delivery planning, fleet assignment, shipping documentation, and shipment readiness confirmation.",
      analysis: [
    "Evaluated business process activities based on cost, quality, time, and flexibility",
    "Analyzed operational challenges related to route planning, cargo volume calculations, transportation conditions, and delivery delays",
    "Identified opportunities to simplify or eliminate activities to improve business process efficiency"
  ],
      solution: "Redesigned the delivery process using proposed BPMN models and developed an information system design based on identified operational needs and system requirements.",
      contribution: "Analyzed business processes, evaluated process performance, identified system actors and requirements, and contributed to process redesign, system modeling, and UI/UX design. Collaborated with the team to present the proposed solution to PT Kiat Ananda Group. Tools: Visual Paradigm, Draw.io, Figma, and Maze.",
      outcome: "Delivered redesigned BPMN models, functional and non-functional requirements documentation, system design diagrams, UI prototypes, and usability testing results. Presented the proposed solution to PT Kiat Ananda Group; the system was not implemented.",
      images:[{s:"images/Overview.png",c:"Overview"},{s:"images/p4-1.png",c:"Document Requirement Fungsional(Identification Actor)"},{s:"images/p4-2.png",c:"Document Requirement Fungsional(Identification Desain System)"},{s:"images/p4-3.png",c:"Diagram Use Case"},{s:"images/p4-4.png",c:"Use Case Description"},{s:"images/p4-5.png",c:"Diagram Activity"},{s:"images/p4-6.png",c:"Diagram Sequence"},{s:"images/p4-7.png",c:"Diagram Class"},{s:"images/p4-8.png",c:"UI Hifi"}], links:[{label:"View supporting documents (Google Drive)", url:"https://drive.google.com/file/d/1YBnyKw4MoN0-Bd5M015UIJibhoTmchoF/view?usp=sharing"}] },
    { color:"lav",
  type:"ERP / Business Analysis",
  title:"CRM Implementation",
  sub:"PT Furniture Nusantara (Dummy Company)",
  meta:"2025 · Academic Project",
  tags:["Odoo ERP","CRM","Business Process Analysis"],
  summary:"Configured Odoo CRM to support customer relationship management and streamline sales opportunity tracking.",
  overview:"This project focused on addressing manual customer data management, unclear sales pipelines, inefficient interdepartmental coordination, missed sales opportunities, and limited real-time reporting.",
  analysis:[
    "Identified customer data management and sales pipeline tracking challenges.",
    "Defined CRM requirements for contact management, lead follow-up, opportunity tracking, and sales reporting."
  ],
  solution:"Configured Odoo CRM to centralize customer information and organize sales opportunities through a structured pipeline, supporting lead follow-up and sales activity monitoring.",
  contribution:"Analyzed business process challenges, identified functional requirements, and configured Odoo CRM to support the proposed sales workflow. Tools: Odoo ERP.",
  outcome:"Established a centralized CRM workflow to improve customer data organization, sales pipeline visibility, and opportunity monitoring.",
  images:[
    {s:"images/Overview4.png",c:"Overview"},{s:"images/odoo1.png",c:"Odoo CRM configuration and sales pipeline"},{s:"images/odoo2.png",c:"Odoo CRM configuration and sales pipeline"},{s:"images/odoo3.png",c:"Odoo CRM configuration and sales pipeline"},{s:"images/odoo4.png",c:"Odoo CRM configuration and sales pipeline"}
  ],
  links:[{label:"View supporting documents (Google Drive)", url:"https://drive.google.com/file/d/1yAyuagqD3vzy2EViot9yOWQ0nJSUk2IQ/view?usp=sharing"}]
}
  ],

  experience: [
    { date:"June–August 2025", role:"Business Development Intern", org:"PT Solo Murni EPTE (KIKY Creative Product)-Boyolali, Central Java",
      points:["Stakeholder interviews and document review","Business process analysis and system requirements documentation","20 Figma mockups covering four main flows"],
      images:[{s:"images/kiky1.jpeg",c:"Internship"},{s:"images/kiky2.jpeg",c:"Internship"},{s:"images/kiky3.jpeg",c:"Internship"}] },
    {
  date: "June–August 2026",
  role: "ABAP Bootcamp Participant",
  org: "PT Semen Indonesia (Persero) Tbk",
  points: [
    "Developed an SAP ABAP Purchase Order reporting program",
    "Implemented a custom transaction code, ZARD_PO, to access the program"
  ],
  images: [
    { s: "images/abap1.png", c: "SAP ABAP" },
    { s: "images/abap2.png", c: "SAP ABAP" },
    { s: "images/abap3.png", c: "SAP ABAP" }
  ]
},
{
  date: "April 2023 – April 2025",
  role: "Core Board Member – Treasurer",
  org: "UKM Band-Telkom University",
  points: [
    "Managed organizational finances, cash flow, and vendor payments",
    "Coordinated merchandise procurement and negotiated vendor prices",
    "Supported event planning and operations for member auditions and music events"
  ],
  images: [
    { s: "images/band1.jpg", c: "UKM Band Activities" },
    { s: "images/band2.jpg", c: "UKM Band Activities" },
    { s: "images/band3.jpeg", c: "UKM Band Activities" },
    { s: "images/band4.jpeg", c: "UKM Band Activities" }
  ]
},
{
  date: "April 2024 – December 2024",
  role: "Public Relations Staff",
  org: "GENESIS HMSI, Telkom University",
  points: [
    "Coordinated communication with speakers and MCs to support smooth event execution",
    "Contacting or inviting speakers",
    "Managing communication and attendance confirmation for guest stars or media partners"
  ],
  images: [
    { s: "images/genesis1.jpg", c: "GENESIS HMSI Event" },
    { s: "images/genesis2.png", c: "GENESIS HMSI Event" },
    { s: "images/genesis3.jpg", c: "GENESIS HMSI Event" }
  ]
},
    { date:"September–December 2024", role:"Business Process Modeling Practicum Assistant", org:"SAG Laboratory",
      points:["Wrote Module 0 for 100+ students","Guided as-is and to-be modeling","Supported practicum operations and the LMS"],
      images:[{s:"images/sag1.png",c:"Practicum Assistant"},{s:"images/sag2.png",c:"Practicum Assistant"},{s:"images/sag3.png",c:"Practicum Assistant"}] },
    { date:"March 2024–January 2026", role:"Competition Division Staff", org:"ERP Laboratory-Telkom University Bandung",
      points:["Coordinated SAP SCM600 training and certification for 50+ students",
    "Developed business case materials and assessment rubrics for the ERP Mini Contest",
    "Managed ERP competition information for official Instagram content"],
      images:[{s:"images/erp0.png",c:"ERP Lab"},{s:"images/erp1.jpg",c:"ERP Lab"},{s:"images/erp2.jpeg",c:"ERP Lab"},{s:"images/erp3.png",c:"ERP Lab"},{s:"images/erp4.png",c:"ERP Lab"},{s:"images/erp5.png",c:"ERP Lab"},{s:"images/erp6.png",c:"ERP Lab"},{s:"images/erp7.png",c:"ERP Lab"}] }
  ],

  // EDUCATION: left and right cards flank a polaroid photo (campus photo goes in images/campus.jpg)
  education: {
    photos:[{ s:"images/edu2.png", c:"Telkom University" },{ s:"images/edu3.jpg", c:"PANDI Scholarship" },{ s:"images/edu1.jpg", c:"Telkom University" }],
    left:{ label:"Scholarship", year:"2024", title:"PANDI Scholarship", sub:"Recipient 2024", badge:"", desc:"Recipient of the 2024 PANDI Scholarship, recognizing academic achievement and supporting educational development." },
    right:{ label:"University", year:"2022-2026", title:"Telkom University", sub:"Bachelor of Information Systems", badge:"GPA 3.86 · Cum Laude", desc:"Focused on business process modeling, business and system analysis, requirements engineering, and ERP concepts, with experience in process improvement and information system design." }
  },
  // CERTIFICATIONS: img = certificate image, id = credential ID, url = verification link (all optional)
  certs: [
    { t:"International Conferences", org:"ICSCC 2026 Conferences", date:"2026", id:"", img:"images/paper.png", url:"" },
    { t:"SAP SCM300", org:"SAP", date:"2025", id:"", img:"images/SCM300.jpeg", url:"" },
    { t:"SAP SCM100", org:"SAP", date:"2025", id:"", img:"images/SCM100.jpeg", url:"" },
    { t:"SAP SCM500", org:"SAP", date:"2024", id:"", img:"images/scm500.png", url:"" },
    { t:"SAP AC010", org:"SAP", date:"2024", id:"", img:"images/ac010.png", url:"" },
    { t:"SAP01", org:"SAP", date:"2022", id:"", img:"images/sap01.png", url:"" },
    { t:"EPrT Language Center", org:"EPrT", date:"2025", id:"", img:"images/eprt.png", url:"" },
    { t:"ABAP SAP Bootcamp (training)", org:"PT Sinergi Informatika Semen Indonesia (SISI)", date:"2026", id:"", img:"images/sertifabap.png", url:"" }
  ],

  paper: {
    label:"Research · ICSCC 2026",
    title:"AI-Based Split Bill Adoption in Fintech: A Measurement Model Validation of Extended TAM Among Generation Z",
    text:"Conducted research on AI-based Split Bill adoption among Generation Z in Central Java using survey data from 413 valid respondents. Applied PLS-SEM with R and seminr to validate the extended Technology Acceptance Model. Findings showed that subjective norms significantly influenced adoption, while ethics-related effects were not statistically significant.",
    chips:["413 valid respondents","PLS-SEM","R / seminr"],
    images:[{s:"images/paper3.png",c:"Paper"},{s:"images/paper.png",c:"Paper"},{s:"images/paper2.png",c:"Paper"}],
    links:[{label:"View supporting documents (Google Drive)", url:"https://drive.google.com/file/d/16pikis3FKnaogOuZcYtvGZJh86p2uVir/view?usp=sharing"}],
  },
  contact: "I'm open to opportunities where I can contribute to business process improvement, system analysis, and technology-driven solutions."
};


/* Automatic page addresses: project.html?p=<slug>. To fix a project's address, add slug:"my-address" to it. */
(function(){
  const sl=t=>t.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  DATA.projects.forEach(p=>{p.slug=p.slug||sl(p.title+" "+(p.sub||""))});
  DATA.paper.slug=DATA.paper.slug||"research-paper";
})();
