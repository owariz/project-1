"use client"

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
      </div>
    </div>
  )
}
