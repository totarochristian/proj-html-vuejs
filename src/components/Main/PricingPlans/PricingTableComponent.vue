<template>
  <div id="pricingTable" class="col-11 d-flex flex-column align-items-center justify-content-center">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(header, index) in store.siteCreationData.main.pricingTable.headers" class="col-3 p-4" :class="{'bg-azure': index>0}">
            <div class="px-2 py-4 d-flex flex-column justify-content-center align-items-center gap-3">
              <img :src="'/img/' + header.image" :alt="header.title" v-if="header?.image">
              <h2>{{ header.title }}</h2>
              <span class="ct-h2" v-if="header?.price">${{ header.price }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in store.siteCreationData.main.pricingTable.rows">
          <th scope="row" class="ct-p py-3 px-4 text-grey">{{ row.title }}</th>
          <td v-for="value in row.values" class="py-3 px-4 ct-p text-center text-grey">
            <span v-if="row.type == 'number'">{{ value }}</span>
            <span v-if="row.type == 'time'">{{ value }} Days</span>
            <i class="fa-solid" :class="value ? 'fa-check text-info' : 'fa-xmark'" v-if="row.type == 'boolean'"></i>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="bg-azure text-center">
          <td></td>
          <td class="p-4">
            <ButtonComponent textContent="get it now" :colorType="2" :sizeType="1" :borderType="1"/>
          </td>
          <td class="p-4">
            <ButtonComponent textContent="get it now" :colorType="1" :sizeType="1" :borderType="1"/>
          </td>
          <td class="p-4">
            <ButtonComponent textContent="get it now" :colorType="2" :sizeType="1" :borderType="1"/>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  import ButtonComponent from '../../general/ButtonComponent.vue';
  import { store } from '../../../data/store';

  export default {
    name: 'PricingTable',
    components:{
      ButtonComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #pricingTable{
    margin-top: 5rem;
    table{
      background-color: white;
      td,th{
        border: 1px solid rgba(211, 211, 211, 0.501);
      }
      tfoot tr td:first-child{
        visibility: hidden;
      }
      .bg-azure{
        background-color: #f7fdff;
      }
      .text-grey{
        color: grey;
      }
      thead{
        tr{
          th{
            border-top: 6px solid #d6f2ff;
          }
          th:nth-child(3){
            border-top-color: $buttonColor1;
          }
        }
      }
    }
  }
</style>