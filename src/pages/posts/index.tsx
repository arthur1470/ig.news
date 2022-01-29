import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import * as prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>                        
                        <p>Por se tratar de uma tecnologia relativamente antiga, com mais de dez anos, a discussão se o jQuery vai morrer ou não foi, inclusive, tema do nosso segundo Faladev, com Diego Fernandes.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>                        
                        <p>Por se tratar de uma tecnologia relativamente antiga, com mais de dez anos, a discussão se o jQuery vai morrer ou não foi, inclusive, tema do nosso segundo Faladev, com Diego Fernandes.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>                        
                        <p>Por se tratar de uma tecnologia relativamente antiga, com mais de dez anos, a discussão se o jQuery vai morrer ou não foi, inclusive, tema do nosso segundo Faladev, com Diego Fernandes.</p>
                    </a>
                </div>
            </main>
        </>
    );    
}

export const getStaticProps:GetStaticProps = async () => {
    const client = getPrismicClient()

    
    const response = await client.get({
        predicates: prismic.predicate.at('document.type', 'post'),
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2));        

    return { 
        props: {}
    }
}