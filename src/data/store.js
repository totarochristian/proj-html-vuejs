import { reactive } from 'vue';

export const store = reactive({
  siteCreationData:{
    header:{
      navbar:{
        categories:[
          {
            name: 'Home',
            link: '#'
          },
          {
            name: 'Courses',
            link: '#'
          },
          {
            name: 'Instructors',
            link: '#'
          },
          {
            name: 'Events',
            link: '#'
          },
          {
            name: 'Pages',
            link: '#'
          },
          {
            name: 'Elements',
            link: '#'
          }
        ]
      },
      hero: {
        data:[
          {
            title: 'Contemporary ideas',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
            action: 'Register now',
            backgroundImage: 'course-9-f-img.jpg'
          },
          {
            title: 'Accelerate your career',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
            action: 'Register now',
            backgroundImage: 'course-6-f-img.jpg'
          },
          {
            title: 'Premium education',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
            action: 'Register now',
            backgroundImage: 'course-7-f-img.jpg'
          }
        ]
      }
    }
  }
});