import React from 'react';
import welcome from '../assets/image/welcome.png';
import { Card } from './Card';
import Footer from './Footer';
import resiskom from "../assets/image/info-resiskom.svg";
import himpunan from "../assets/image/info-himpunan.svg";
import kepanitian from "../assets/image/info-kepanitian.svg";
import akademik from "../assets/image/info-akademik.svg";


export const home = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                padding: '10px 10px 10px 60px',
                borderBottom: '1px solid black',

            }}>
                <h2>MabaQu</h2>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    padding: '50px 100px 0px 100px',
                    width: '900px',
                    height: '100px',
                    fontWeight: 80,
                    fontSize: 20,
                    lineHeight: 1.5,
                }}>
                    <h2>Selamat Datang</h2>
                    <h1 style={{ width: 1200, }}>Mahasiswa Baru</h1>
                    <h1>Resiskom Untan 2022!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum morbi risus, turpis quam aliquam. Felis pellentesque cursus ut sit nullam nunc neque nulla. Nisi, pulvinar aenean id faucibus sed. Pellentesque tortor volutpat diam a. Ipsum enim senectus euismod turpis tortor at morbi. Id dolor massa leo condimentum sed blandit libero, varius sit. Ac amet varius commodo, porttitor sed pharetra, in consectetur. Velit urna id arcu morbi congue. Mauris tellus et et lorem integer mauris lacinia.</p>
                </div>
                <div>
                    <img style={{
                        width: '400px',
                        padding: '50px 50px 0px 0px',

                    }} src={welcome} alt='welcome' />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "50px 0px 50px 10px",
                }}>
                <Card image={resiskom} text="Info Resiskom" />
                <Card image={himpunan} text="Info Himpunan" />
                <Card image={kepanitian} text="Info Kepanitian" />
                <Card image={akademik} text="Info Akademik" />
            </div>
            <Footer backgroundColor='#DCDCDC' />
        </div>


    )
}

export default home;