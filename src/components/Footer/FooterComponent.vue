<template>
  <footer class="py-4 bg-dark text-white d-flex flex-column gap-4">
    <div id="upperFooter" class="p-4 d-flex justify-content-between align-items-start gap-4">
      <div class="p-4 d-flex justify-content-between align-items-center gap-4">
        <div id="generalInfo" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
          <img :src="'/img/' + store.siteCreationData.footer.upper.general.image" alt="Logo">
          <p class="fs-4">{{ store.siteCreationData.footer.upper.general.description }}</p>
          <div class="fs-4 d-flex align-items-center gap-3">
            <i class="fa-solid fa-phone-volume"></i>
            <span>{{ store.siteCreationData.footer.upper.general.phone }}</span>
          </div>
          <div class="fs-4 d-flex align-items-center gap-3">
            <i class="fa-regular fa-clock"></i>
            <span>{{ store.siteCreationData.footer.upper.general.hours }}</span>
          </div>
        </div>
        <div id="popularCoursesInfo" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
          <h3 class="fs-2">{{ store.siteCreationData.footer.upper.popularCourses.title }}</h3>
          <div class="d-flex flex-column align-items-start justify-content-center gap-3">
            <div class="d-flex flex-column align-items-start justify-content-center gap-1" v-for="info in store.siteCreationData.footer.upper.popularCourses.data">
              <a :href="info.titleLink" class="fs-4 fw-seminold text-capitalize">{{ info.title }}</a>
              <a :href="info.authorLink" class="fs-5 text-capitalize">{{ info.author }}</a>
            </div>
          </div>
        </div>
        <div id="supportInfo" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
          <h3 class="fs-2">{{ store.siteCreationData.footer.upper.support.title }}</h3>
          <div class="d-flex flex-column align-items-start justify-content-center gap-3">
            <a :href="info.link" class="fs-4" v-for="info in store.siteCreationData.footer.upper.support.data">{{ info.title }}</a>
          </div>
        </div>
      </div>
      <div id="flexibleLearnings" class="p-4 col-3 d-flex flex-column align-items-start justify-content-center gap-4">
        <h3 class="fs-2">{{ store.siteCreationData.footer.upper.flexibleLearning.title }}</h3>
        <img :src="'/img/' + store.siteCreationData.footer.upper.flexibleLearning.image" alt="World image">
      </div>
    </div>
    <div id="bottomFooter" class="d-flex justify-content-between align-items-center gap-4">
      <div>
        copyright
      </div>
      <div>
        follow
      </div>
    </div>
  </footer>
</template>

<script>
  import { store } from '../../data/store';

  export default {
    name: 'Footer',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  footer{
    padding-top: 6rem!important;
    a{
      color: inherit;
      text-decoration: none;
      &:hover{
        color: $buttonColor1;
      }
    }
    #popularCoursesInfo a:last-child:hover{
      color: grey;
    }
    #generalInfo>div{
      cursor: pointer;
      &:hover i{
        color: $buttonColor1;
      }
    }
    #upperFooter{
      #generalInfo{
        img{
          height: 3.5rem;
          width: auto;
        }
      }
      #flexibleLearnings{
        img{
          width: 305px;
          height: auto;
        }
      }
    }
  }
</style>