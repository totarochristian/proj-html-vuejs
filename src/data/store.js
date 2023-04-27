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
    },
    main:{
      subjects:{
        data: [
          {
            image: 'h5-custom-icon-1.png',
            name: 'Languages'
          },
          {
            image: 'h5-custom-icon-2.png',
            name: 'Software'
          },
          {
            image: 'h5-custom-icon-3.png',
            name: 'Business'
          },
          {
            image: 'h5-custom-icon-4.png',
            name: 'Chemistry'
          },
          {
            image: 'h5-custom-icon-5.png',
            name: 'Science'
          },
          {
            image: 'h5-custom-icon-6.png',
            name: 'DIY&Crafts'
          }
        ]
      },
      feedback:{
        backgroundImage: 'h5-parallax-img-1.png',
        data:[
          {
            image: 'testimonials-standard-6.png',
            feedback: 'Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus',
            name: 'Molly',
            surname: 'Simon',
            role: 'Teacher'
          },
          {
            image: 'testimonials-standard-2.png',
            feedback: 'Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus',
            name: 'Joan',
            surname: 'Collins',
            role: 'Student'
          },
          {
            image: 'testimonials-standard-1.png',
            feedback: 'Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus',
            name: 'Virginia',
            surname: 'Foster',
            role: 'Student'
          }
        ]
      }
    }
  }
});