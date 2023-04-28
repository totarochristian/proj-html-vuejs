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
      },
      learningPossibilities:{
        data:[
          {
            sectiontitle: 'What we do',
            title: 'Learning Possibilities',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            options: [
              'We enrich lives through learning.',
              'Maximizing potential through individual attention.',
              'The trusted name for specialized training.',
              'People teach. People learn. This is where they connect.'
            ],
            image: 'h12-tabs-icon-1.png'
          },
          {
            sectiontitle: 'Degree programme',
            title: 'Inspiring Minds',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            options: [
              'Maximizing potential through individual attention.',
              'We enrich lives through learning.',
              'People teach. People learn. This is where they connect.',
              'The trusted name for specialized training.'
            ],
            image: 'h12-tabs-icon-2.png'
          },
          {
            sectiontitle: 'Career achievements',
            title: 'Investing in Knowledge',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            options: [
              'We enrich lives through learning.',
              'Maximizing potential through individual attention.',
              'The trusted name for specialized training.',
              'People teach. People learn. This is where they connect.'
            ],
            image: 'h12-tabs-icon-3.png'
          },
          {
            sectiontitle: 'Personal managment',
            title: 'Secure Your Future',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            options: [
              'Maximizing potential through individual attention.',
              'We enrich lives through learning.',
              'People teach. People learn. This is where they connect.',
              'The trusted name for specialized training.'
            ],
            image: 'h12-tabs-icon-4.png'
          },
          {
            sectiontitle: 'Steps to success',
            title: 'Where Learning Begins',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            options: [
              'We enrich lives through learning.',
              'Maximizing potential through individual attention.',
              'The trusted name for specialized training.',
              'People teach. People learn. This is where they connect.'
            ],
            image: 'h12-tabs-icon-5.png'
          },
          {
            sectiontitle: 'Knowledge transfer',
            title: 'Knowledge is Power',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            options: [
              'Maximizing potential through individual attention.',
              'We enrich lives through learning.',
              'People teach. People learn. This is where they connect.',
              'The trusted name for specialized training.'
            ],
            image: 'h12-tabs-icon-6.png'
          }
        ]
      },
      popularCourses:{
        data:[
          {
            image: 'course-1-f-img.jpg',
            title: 'Business english',
            author: 'Preston Marshall',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 20,
            follower: 0,
            tag: 'languages',
            liked: false,
            hide: false
          },
          {
            image: 'course-2-f-img.jpg',
            title: 'Social computing',
            author: 'David Sanders',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 0,
            follower: 0,
            tag: 'programming',
            liked: false,
            hide: false
          },
          {
            image: 'course-3-f-img.jpg',
            title: 'Learn spanish',
            author: 'Jennie King',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 20,
            follower: 0,
            tag: 'languages',
            liked: false,
            hide: false
          },
          {
            image: 'course-4-f-img.jpg',
            title: 'Basic marketing',
            author: 'Edward Bowman',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 40,
            follower: 0,
            tag: 'business',
            liked: false,
            hide: true
          },
          {
            image: 'course-5-f-img.jpg',
            title: 'Android developer',
            author: 'David Sanders',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 0,
            follower: 0,
            tag: 'programming',
            liked: false,
            hide: true
          },
          {
            image: 'course-6-f-img.jpg',
            title: 'Web designing',
            author: 'Jennifer Powell',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 0,
            follower: 0,
            tag: 'programming',
            liked: false,
            hide: true
          },
          {
            image: 'course-12-f-img.jpg',
            title: 'Financial modeling',
            author: 'Edward Bowman',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 20,
            follower: 0,
            tag: 'business',
            liked: false,
            hide: true
          },
          {
            image: 'course-11-f-img.jpg',
            title: 'Academic english',
            author: 'Dave Robbins',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 0,
            follower: 0,
            tag: 'languages',
            liked: false,
            hide: true
          },
          {
            image: 'course-7-f-img.jpg',
            title: 'Modern psychology',
            author: 'Kathryn Webb',
            description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris',
            price: 40,
            follower: 0,
            tag: 'business',
            liked: false,
            hide: true
          }
        ]
      },
      pricingTable:{
        headers:[
          {
            image: '',
            title: 'Save up to 40% by paying weekly',
            price: 0
          },
          {
            image: 'h5-custom-icon-7.png',
            title: 'Standard',
            price: 12
          },
          {
            image: 'h5-custom-icon-8.png',
            title: 'Professional',
            price: 59
          },
          {
            image: 'h5-custom-icon-9.png',
            title: 'Advanced',
            price: 88
          }
        ],
        rows:[
          {
            title: 'Number of Courses',
            type: 'number',
            values: [2, 4, 6]
          },
          {
            title: 'Time',
            type: 'time',
            values: [15, 30, 30]
          },
          {
            title: 'Web Designing',
            type: 'boolean',
            values: [true, true, true]
          },
          {
            title: 'Human-Centered Design',
            type: 'boolean',
            values: [true, true, true]
          },
          {
            title: 'Basic Marketing',
            type: 'boolean',
            values: [false, true, true]
          },
          {
            title: 'Python for Everybody',
            type: 'boolean',
            values: [false, true, true]
          },
          {
            title: 'Android Developer',
            type: 'boolean',
            values: [false, false, true]
          },
          {
            title: 'Business English',
            type: 'boolean',
            values: [false, false, true]
          }
        ]
      },
      brands: {
        data: [
          {
            normal: 'h5-client-5.png',
            hover: 'h5-client-5-h.png'
          },
          {
            normal: 'h5-client-1.png',
            hover: 'h5-client-1-h.png'
          },
          {
            normal: 'h5-client-2.png',
            hover: 'h5-client-2-h.png'
          },
          {
            normal: 'h5-client-1.png',
            hover: 'h5-client-1-h.png'
          }
        ]
      }
    },
    footer:{
      data: {
        general: {
          image: 'footer-logo-1.png',
          description: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
          phone: '1-677-124-44227',
          hours: 'Mon-Sat 8:00-18:00'
        },
        popularCourses: {
          title: 'Popular Courses',
          data: [
            {
              title: 'business english',
              titleLink: '#',
              author: 'Preston Marshall',
              authorLink: '#'
            },
            {
              title: 'Social computing',
              titleLink: '#',
              author: 'David Sanders',
              authorLink: '#'
            },
            {
              title: 'Learn spanish',
              titleLink: '#',
              author: 'Jennie King',
              authorLink: '#'
            }
          ]
        },
        support:{
          title: 'Support',
          data: [
            {
              title: 'User dashboard',
              link: '#'
            },
            {
              title: 'Contact Us',
              link: '#'
            },
            {
              title: 'FAQ',
              link: '#'
            },
            {
              title: 'Course Offer',
              link: '#'
            },
            {
              title: 'Events',
              link: '#'
            }
          ]
        },
        flexibleLearning:{
          title: 'Flexible Learning',
          image: 'footer-img-1.png'
        }
      }
    }
  }
});