"use client"

import React from "react"

export default function Assignment() {
  return (
    <div className="w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">📄 Assignment</h1>

      <div className="w-full h-[80vh] border rounded-lg overflow-hidden">
        {/* วิธี 1: iframe */}
        <iframe
          src="/111.pdf" // ✅ เอาไฟล์ไปวางใน public/ เช่น public/sample.pdf
          className="w-full h-full"
        />

        {/* วิธี 2: object (ใช้แทน iframe ได้เหมือนกัน) */}
        {/* <object data="/sample.pdf" type="application/pdf" className="w-full h-full">
          <p>ไม่สามารถแสดง PDF ได้ <a href="/sample.pdf" className="text-blue-500">กดที่นี่เพื่อดาวน์โหลด</a></p>
        </object> */}
      </div>
    </div>
  )
}
