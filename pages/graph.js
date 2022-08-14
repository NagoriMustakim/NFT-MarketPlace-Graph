import { useQuery, gql } from "@apollo/client";
const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { tokenId:1}) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`
export default function graph() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data);
    <div><h1>Welcome to graph</h1></div>
}