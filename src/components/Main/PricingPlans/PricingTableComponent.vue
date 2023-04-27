<template>
  <div id="pricingTable" class="col-9">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="header in store.siteCreationData.main.pricingTable.headers" class="col-3">
            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
              <img :src="'/img/' + header.image" :alt="header.title" v-if="header?.image">
              <h2 class="fs-3">{{ header.title }}</h2>
              <span class="fs-4" v-if="header?.price">${{ header.price }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in store.siteCreationData.main.pricingTable.rows">
          <th scope="row" class="fs-5 text-grey">{{ row.title }}</th>
          <td v-for="value in row.values" class="fs-4 text-center text-grey">
            <span v-if="row.type == 'number'">{{ value }}</span>
            <span v-if="row.type == 'time'">{{ value }} Days</span>
            <i class="fa-solid" :class="value ? 'fa-check text-info' : 'fa-xmark'" v-if="row.type == 'boolean'"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { store } from '../../../data/store';

  export default {
    name: 'PricingTable',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text-grey{
    color: grey;
  }
</style>