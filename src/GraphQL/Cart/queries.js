import { gql } from "@apollo/client";

export const INSERT_KERANJANG = gql`
  mutation addKeranjang($keranjang: keranjang_insert_input!) {
    insert_keranjang(objects: [$keranjang]) {
      returning {
        id
        jumlah
        total_harga
        productId
        namaProduct
      }
    }
  }
`;

export const GET_KERANJANG_PRODUCT_ID = gql`
  query getKeranjangByProductId($productId: Int!) {
    keranjang(where: { productId: { _eq: $productId } }) {
      jumlah
      total_harga
      productId
    }
  }
`;

export const UPDATE_KERANJANG = gql`
  mutation updateKeranjang($productId: Int!, $jumlah: Int!, $total_harga: Int!) {
    update_keranjang(
      where: { productId: { _eq: $productId } }
      _set: { jumlah: $jumlah },
      _inc: { total_harga: $total_harga }
    ) {
      affected_rows
    }
  }
`;

export const GET_KERANJANG = gql`
subscription getKeranjang {
  keranjang {
    productId,
    jumlah,
    total_harga,
    namaProduct,
  }
}
`
 
