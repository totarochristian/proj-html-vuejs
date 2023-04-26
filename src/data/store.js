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
      }
    }
  }
});