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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
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

</style>