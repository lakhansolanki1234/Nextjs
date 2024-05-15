'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormData = {
    title: "",
    description: "",
}

export default function AddBlog() {
    const [blogformdata, setblogformdata] = useState(initialFormData)
    const router = useRouter();

    console.log(blogformdata)

    async function handleAddblog() {
        const response = await fetch('/api/blog/add-new-blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(blogformdata),
        })
        const result = await response.json();
        console.log(result)
        if (result?.success) {
            setblogformdata(initialFormData);
            router.push("/blog-list")
        }
    }

    return (
        <div>
            <h1 className="font-bold text-lg mb-3">Add New Blog</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <label>Enter Blog Title</label>
                    <input className="border border-red-500 outline-none" name="title" value={blogformdata['title']}
                        onChange={(e) =>
                            setblogformdata({
                                ...blogformdata,
                                title: e.target.value,
                            })
                        } />
                </div>
                <div className="flex flex-col gap-3">
                    <label>Enter Blog Description</label>
                    <textarea rows={5} className="border border-red-500 outline-none" name="description" value={blogformdata["description"]}
                        onChange={(e) =>
                            setblogformdata({
                                ...blogformdata,
                                description: e.target.value,
                            })
                        } />
                </div>
                <div>
                    <button onClick={handleAddblog} className="border border-red-500 p-4 bg-black text-white">Add Blog</button>
                </div>
            </div>
        </div>


    );
}