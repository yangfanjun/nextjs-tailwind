/* This example requires Tailwind CSS v2.0+ */
import {useRouter} from 'next/router'

import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Section2 from "../../components/Section2";
import Carts from "../../components/Carts";
import Pricing from "../../components/Pricing";
import Form from "../../components/Form";

export default function Example() {

    const router = useRouter()
    const {area} = router.query
    // console.log('router.query', area)

    return (
        <Layout>
            <Section title={area}/>
            <Section2/>
            <Carts/>
            <Pricing/>
            <Form/>
        </Layout>
    )
}
