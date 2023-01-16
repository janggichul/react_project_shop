import BreadCrumb from "../components/BreadCrumb"
import ItemList from "../components/ItemList"

const Digital = ():JSX.Element => {
    return (
        <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
            <BreadCrumb category="홈" crumb="디지털"/>
            <article>
                <ItemList title='디지털' limit={12}/>
            </article>
        </section>
    )
}

export default Digital