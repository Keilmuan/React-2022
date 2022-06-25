import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Siskom from '../assets/image/bg-info-resiskom.png';
import Box from './Box';

const resiskom = () => {
    return (
        <div>
            <Navbar />
            <Hero
                bg={Siskom}
                decorationColor="#F0CB3C"
                title="Info Resiskom"
                textColor="#A5860F"
                subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dis volutpat, amet, erat nibh. Amet, integer velit in malesuada arcu, mi, porttitor id. In ac tellus et neque."} />
            <div style={{ padding: "20px 100px" }}>
                <Box color="#FEF9C3" padding="70px 100px">
                    <h1 style={{
                        textAlign:'center'
                    }}>
                        Visi dan Misi
                        <br />
                        Prodi Rekayasa Sistem Komputer
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
                        enim aliquam turpis amet vel, placerat. Morbi aliquet volutpat in
                        dui orci. Morbi adipiscing arcu arcu vestibulum non turpis sed quis
                        at. Facilisi pulvinar tempus congue etiam luctus turpis lectus.
                        Ultrices quam pellentesque amet, maecenas etiam dignissim in est.
                        Porta aenean lectus vel diam id duis platea.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Laoreet enim aliquam turpis amet
                        vel, placerat. Morbi aliquet volutpat in dui orci. Morbi adipiscing
                        arcu arcu vestibulum non turpis sed quis at. Facilisi pulvinar
                        tempus congue etiam luctus turpis lectus. Ultrices quam pellentesque
                        amet, maecenas etiam dignissim in est. Porta aenean lectus vel diam
                        id duis platea.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Laoreet enim aliquam turpis amet vel, placerat. Morbi aliquet
                        volutpat in dui orci. Morbi adipiscing arcu arcu vestibulum non
                        turpis sed quis at. Facilisi pulvinar tempus congue etiam luctus
                        turpis lectus. Ultrices quam pellentesque amet, maecenas etiam
                        dignissim in est. Porta aenean lectus vel diam id duis platea.
                    </p>
                </Box>
            </div>
        </div>
    )
}

export default resiskom