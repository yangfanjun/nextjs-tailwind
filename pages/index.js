/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import {Disclosure, Menu, Transition, Popover} from '@headlessui/react'
import {
    BellIcon,
    MenuIcon,
    XIcon,
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    ScaleIcon
} from '@heroicons/react/outline'
import Layout from "../components/Layout";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Carts from "../components/Carts";
import Pricing from "../components/Pricing";
import Form from "../components/Form";

export default function Example() {
    return (
        <Layout>
            <Section/>
            <Section2/>
            <Carts/>
            <Pricing/>
            <Form/>
        </Layout>
    )
}
