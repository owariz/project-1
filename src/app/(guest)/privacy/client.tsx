"use client";

import Link from "next/link";

export const PrivacyRender = () => {
    return (
        <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">นโยบายความเป็นส่วนตัว</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. การเก็บข้อมูล</h2>
                <p className="text-gray-700">
                    เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลและข้อมูลการใช้งาน เช่น ชื่อ อีเมล ที่อยู่ IP
                    ประเภทเบราว์เซอร์ อุปกรณ์ และพฤติกรรมการใช้งาน เพื่อการให้บริการและปรับปรุงระบบ
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. การใช้ข้อมูล</h2>
                <p className="text-gray-700">
                    ข้อมูลที่เก็บจะถูกใช้เพื่อวัตถุประสงค์ในการดำเนินงาน พัฒนา ปรับปรุง และรักษาความปลอดภัยของบริการ
                    รวมถึงการสื่อสารทางการตลาดหากคุณยินยอม
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. การเปิดเผยข้อมูล</h2>
                <p className="text-gray-700">
                    เราอาจเปิดเผยข้อมูลต่อบุคคลภายนอกในกรณีที่จำเป็นตามกฎหมาย
                    หรือเพื่อการดำเนินงานร่วมกับคู่ค้าหรือผู้ให้บริการของเรา
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. การเก็บรักษาข้อมูล</h2>
                <p className="text-gray-700">
                    ข้อมูลจะถูกเก็บรักษาไว้ตราบเท่าที่จำเป็นต่อวัตถุประสงค์ที่ได้ระบุไว้
                    และเรามีสิทธิ์ลบหรือทำลายข้อมูลได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. คุกกี้และเทคโนโลยีติดตาม</h2>
                <p className="text-gray-700">
                    เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อเก็บข้อมูลการใช้งาน
                    คุณสามารถปิดการทำงานของคุกกี้ได้จากการตั้งค่าเบราว์เซอร์
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. การแก้ไขนโยบาย</h2>
                <p className="text-gray-700">
                    เรามีสิทธิ์แก้ไขหรือปรับปรุงนโยบายนี้ได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                    การใช้บริการต่อหลังจากมีการเปลี่ยนแปลงถือว่าคุณยอมรับนโยบายที่แก้ไขแล้ว
                </p>
            </section>
        </main>
    )
}
