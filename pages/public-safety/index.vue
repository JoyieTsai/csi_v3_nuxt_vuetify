<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :btns="btnGroup">
        <template v-slot:icon>
          <img
            class="tw-w-16 xl:tw-w-20"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template v-slot:title>{{ title }}</template>
        <template v-slot:subtitle>{{ subtitle }}</template>
        <template v-slot:desc-heading>{{ descHeading }}</template>
        <template v-slot:desc-content>{{ descContent }}</template>
      </Hero>
      <BenefitsA class="tw-my-12 xl:tw-my-28" :data="benefits" />
      <TotalSolution class="tw-my-12 xl:tw-my-28" :solutions="solutions" />
      <SuccessStories class="tw-my-12 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    btnGroup: true,
    category: 'public-safety',
    title: 'Public Safety Overview',
    subtitle:
      'Integrated Public Safety software suite to enhance eGovernment operations, supporting Police, Fire, and EMS personnel in their day to day.',
    icon: 'public_safety.svg',
    coverimg: 'public-safety.jpg',
    descHeading: 'United in response and communication',
    descContent:
      'Today, government agencies have to cooperate in dynamic and complex environments and respond to emergent matters—all in an efficient manner. But that’s easier said than done. In reality, they face numerous challenges from budgetary constraints to limited communication tools to inadequate interagency data sharing. By leveraging our industry-leading software suite and public sector expertise, CSI works closely with agencies, responders, and public sector personnel to tackle these issues head-on.',
    benefits: [
      {
        icon: 'enterprise_application.svg',
        title: 'Enterprise Application Integration',
        desc: 'Single integrated solution with comprehensive capabilities including Police, Fire, and EMS dispatch, records and data management, mobile operations, field and office reporting, evidence tracking, mapping, analytics, investigations, and intelligence.',
      },
      {
        icon: 'data_share.svg',
        title: 'Data Exchange',
        desc: 'Expert interfacing enables integration with other public safety systems, external data sources, regional databases, and national databases, in addition to prosecution, courts, and fusion centers.',
      },
      {
        icon: 'agency_control.svg',
        title: 'Agency Control',
        desc: 'Agencies can customize the system to fit their policies, processes, and mission. Patented intake form technology and low-code development solutions reduce custom coding requirements.',
      },
      {
        icon: 'compliance.svg',
        title: 'Compliance',
        desc: 'Systems and processes designed to comply with legal regulations, functional requirements (LEITSC, UCADFR), data exchange standards (NIEM, GJXML, ODBC), data encryption (CJIS), and reporting protocols (NIBRS, NFIRS).',
      },
      {
        icon: 'productivity.svg',
        title: 'Productivity & Agility',
        desc: 'Workflow-optimized user experience and automation increase productivity and reduce administrative burdens by eliminating manual and duplicative tasks.',
      },
      {
        icon: 'technology.svg',
        title: 'Technology',
        desc: 'Web-based, mobile, and cloud-ready technology ensures platform independence and maximum accessibility, security, and robustness. The hybrid cloud solution is hosted on the CJIS-compliant MS Azure or AWS GovCloud platform.',
      },
    ],
    solutions: [
      {
        product: 'RMS',
        name: 'Law Enforcement Records Management',
        icon: 'icon-rms_solid',
        diagram: 'solution-rms.png',
        // modules: [
        //   {
        //     type: 'Base Features',
        //     items: [
        //       'Administration Reports',
        //       'Instant Call Log',
        //       'Mapping Comp.',
        //       'Admin Comp.',
        //       'Center APP',
        //       'Roll Call',
        //       'Bolo',
        //       'Server with Web Service',
        //       'Pre-Assignment',
        //       'Patrol Features',
        //       'Master Name Index & Lookup',
        //       'Staff, Unit & Support File Management',
        //       'Queue Server',
        //       'Chat',
        //     ],
        //   },
        //   {
        //     type: 'MDT Application',
        //     items: [
        //       'Bolo',
        //       'Officer Initiated CFS',
        //       'Roll Call',
        //       'AVL Add-on',
        //       'NCIC / DMV / NLETS',
        //       'MV Stop',
        //       'Text-to-Speech',
        //       'Chat',
        //     ],
        //   },
        //   {
        //     type: 'Add-On Modules',
        //     items: [
        //       'NCIC Gateway',
        //       'eTicket Gateway',
        //       'Mapping with Real Time Traffic',
        //       'Master Location and Data Import',
        //       'Q & A',
        //     ],
        //   },
        // ],
      },
      {
        product: 'CAD',
        name: 'Computer Aided Dispatch',
        icon: 'icon-cad_solid',
        diagram: 'solution-cad.png',
        // modules: [
        //   {
        //     type: 'Base Features',
        //     items: [
        //       'Administration Reports',
        //       'Instant Call Log',
        //       'Mapping Comp.',
        //       'Admin Comp.',
        //       'Center APP',
        //       'Roll Call',
        //       'Bolo',
        //       'Server with Web Service',
        //       'Pre-Assignment',
        //       'Patrol Features',
        //       'Master Name Index & Lookup',
        //       'Staff, Unit & Support File Management',
        //       'Queue Server',
        //       'Chat',
        //     ],
        //   },
        //   {
        //     type: 'MDT Application',
        //     items: [
        //       'Bolo',
        //       'Officer Initiated CFS',
        //       'Roll Call',
        //       'AVL Add-on',
        //       'NCIC / DMV / NLETS',
        //       'MV Stop',
        //       'Text-to-Speech',
        //       'Chat',
        //     ],
        //   },
        //   {
        //     type: 'Add-On Modules',
        //     items: [
        //       'NCIC Gateway',
        //       'eTicket Gateway',
        //       'Mapping with Real Time Traffic',
        //       'Master Location and Data Import',
        //       'Q & A',
        //     ],
        //   },
        // ],
        interfaces: [
          'ePro',
          'Fingerprint',
          'Mapping',
          '911 ANI/ALI',
          'Traffic Cam',
          'NFIRS',
          'NBIRS',
        ],
      },
      {
        product: 'Fire & EMS',
        name: 'Fire & EMS Solutions',
        icon: 'icon-fire_ems_solid',
        diagram: 'solution-fireems.png',
        // modules: [
        //   {
        //     type: 'Base Features',
        //     items: [
        //       'Administration Reports',
        //       'Instant Call Log',
        //       'Mapping Comp.',
        //       'Admin Comp.',
        //       'Center APP',
        //       'Roll Call',
        //       'Bolo',
        //       'Server with Web Service',
        //       'Pre-Assignment',
        //       'Patrol Features',
        //       'Master Name Index & Lookup',
        //       'Staff, Unit & Support File Management',
        //       'Queue Server',
        //       'Chat',
        //     ],
        //   },
        //   {
        //     type: 'MDT Application',
        //     items: [
        //       'Bolo',
        //       'Officer Initiated CFS',
        //       'Roll Call',
        //       'AVL Add-on',
        //       'NCIC / DMV / NLETS',
        //       'MV Stop',
        //       'Text-to-Speech',
        //       'Chat',
        //     ],
        //   },
        //   {
        //     type: 'Add-On Modules',
        //     items: [
        //       'NCIC Gateway',
        //       'eTicket Gateway',
        //       'Mapping with Real Time Traffic',
        //       'Master Location and Data Import',
        //       'Q & A',
        //     ],
        //   },
        // ],
      },
    ],
  }),
}
</script>
