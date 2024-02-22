import React from 'react';
import { Tabs, Tab, Card, Row, Col } from "react-bootstrap";

function TabCommittee() {
    return (
        <div className='p-5'>
            <Card className='p-4'
                style={{
                border: "none"
                }}>
                <Card.Title  style={{
                    backgroundColor: "#445069",
                    color: "white"}}
                    className='px-4 py-2'>
                    General chairs
                </Card.Title>
                <Card.Text>
                    <ul>
                        <li>Ary Setijadi Prihatmanto (Institut Teknologi Bandung)</li>
                        <li>Mochammad Agoes Moelyadi (Institut Teknologi Bandung)</li>
                        <li>Agus Budiyono (ICTE)</li>
                    </ul>
                </Card.Text>
            </Card>
            <Card className='p-4'
                style={{
                border: "none"
            }}>
                <Card.Title style={{
                    backgroundColor: "#445069",
                    color: "white"}}
                    className='px-4 py-2'>
                    Technical program committees
                </Card.Title>
                <Card.Text>
                    <ul>
                        <li>Lavi Zuhal (Institut Teknologi Bandung)</li>
                        <li>Rini Akmeliawati (U of Adelaide)</li>
                        <li>Lung-Jieh Yang (Tamkang University)</li>
                        <li>Wei He (University of Science and Technology Beijing)</li>
                        <li>Sutthiphong Srigrarom (National University of Singapore)</li>
                        <li>Endra Joelianto (Institut Teknologi Bandung)</li>
                        <li>Zahrul Fuadi (Universitas Syiah Kuala)</li>
                        <li>Ikhwana Elfitri (Universitas Andalas)</li>
                        <li>Nasruddin (Universitas Indonesia)</li>
                        <li>Tatacipta Dirgantara (Institut Teknologi Bandung)</li>
                        <li>Tutun Juhana (Institut Teknologi Bandung)</li>
                        <li>Khairul Anwar (Universitas Telkom)</li>
                        <li>Gesang Nugroho (Universitas Gadjah Mada)</li>
                        <li>Hendro Nurhadi (Institut Teknologi Sepuluh November)</li>
                        <li>Irfan Syamsuddin (Politeknik Negeri Ujung Pandang)</li>
                        <li>Vishnu Kumar Kaliappan (KPR Institute of Engineering and Technology, India)</li>
                    </ul>
                </Card.Text>
            </Card>
            <Card className='p-4'
                style={{
                border: "none"
            }}>
                <Card.Title style={{
                    backgroundColor: "#445069",
                    color: "white"}}
                    className='px-4 py-2'>
                    Steering committees
                </Card.Title>
                <Card.Text>
                    <ul>
                        <li>Kenzo Nonami (Chiba University)</li>
                        <li>Taesam Kang(Konkuk University)</li>
                        <li>Youmin Zhang (Concordia University)</li>
                        <li>KJ Yoon (Konkuk University)</li>
                        <li>Muljowidodo Kartidjo (Institute of Technology Bandung)</li>
                        <li>Agus Budiyono (ICTE)</li>
                        <li>Lung-Jieh Yang (Tamkang University)</li>
                        <li>Thien-Phuc Tran (HCMUT)</li>
                        <li>Masafumi Miwa (Tokushima University)</li>
                        <li>Park Hoon Cheol (Konkuk University)</li>
                        <li>Bambang Riyanto (Institute of Technology Bandung)</li>
                    </ul>
                </Card.Text>
            </Card>
        </div>
  );
}

export default TabCommittee;
