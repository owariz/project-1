"use client";

import Link from "next/link";

export const TermsRender = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">ข้อกำหนดและเงื่อนไขการให้บริการ (Terms of Service)</h1>
            <p className="text-gray-600 mb-8">
                การใช้บริการของเรา หมายถึงคุณยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในหน้านี้
                โปรดอ่านอย่างละเอียดเพื่อความเข้าใจสิทธิ์และหน้าที่ของคุณ
            </p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. การยอมรับข้อกำหนด</h2>
                <p className="text-gray-700">
                    เมื่อคุณสมัครใช้งานหรือใช้บริการของเรา หมายถึงคุณยอมรับข้อกำหนดเหล่านี้โดยสมบูรณ์
                    หากคุณไม่ยอมรับ โปรดหยุดใช้บริการทันที
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. การใช้งานที่เหมาะสม</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>ห้ามใช้บริการเพื่อการกระทำที่ผิดกฎหมาย</li>
                    <li>ห้ามใช้เพื่อส่งสแปม ไวรัส หรือเนื้อหาที่ไม่เหมาะสม</li>
                    <li>ต้องเคารพสิทธิ์ของผู้ใช้อื่นและบุคคลที่สาม</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. การเก็บและใช้ข้อมูล</h2>
                <p className="text-gray-700">
                    เราอาจเก็บข้อมูลการใช้งานของคุณเพื่อปรับปรุงบริการ
                    โปรดอ่าน{" "}
                    <Link href="/privacy" className="text-indigo-600 hover:underline">
                        นโยบายความเป็นส่วนตัว
                    </Link>{" "}
                    เพื่อดูรายละเอียด
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. การแก้ไขข้อกำหนด</h2>
                <p className="text-gray-700">
                    เรามีสิทธิ์แก้ไขหรือปรับปรุงข้อกำหนดนี้ได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                    การใช้บริการต่อหลังจากมีการเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดที่แก้ไขแล้ว
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. การยุติการให้บริการ</h2>
                <p className="text-gray-700">
                    เรามีสิทธิ์ระงับหรือยุติการให้บริการแก่ผู้ใช้ที่ละเมิดข้อกำหนด
                    โดยไม่ต้องแจ้งล่วงหน้า
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. ข้อจำกัดความรับผิด</h2>
                <p className="text-gray-700">
                    เราไม่รับผิดชอบต่อความเสียหายที่เกิดจากการใช้หรือไม่สามารถใช้บริการ
                    รวมถึงความเสียหายทางตรง ทางอ้อม หรือผลสืบเนื่องใด ๆ
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">7. การติดต่อเรา</h2>
                <p className="text-gray-700">
                    หากคุณมีคำถามเกี่ยวกับข้อกำหนดนี้ โปรดติดต่อที่{" "}
                    <a
                        href="mailto:support@example.com"
                        className="text-indigo-600 hover:underline"
                    >
                        support@example.com
                    </a>
                </p>
            </section>

            <p className="mt-10 text-sm text-gray-500">
                อัปเดตล่าสุด: 12 สิงหาคม 2025
            </p>
        </div>
    )
}
