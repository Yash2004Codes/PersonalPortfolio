'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./section-heading";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";

export function Contact() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading id="contact" title="Get In Touch" subtitle="I'm open to new opportunities and collaborations." />
                <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
                    {isClient ? (
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message..." rows={5} />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    ) : (
                        <div className="space-y-4 h-[356px] animate-pulse bg-secondary rounded-lg" />
                    )}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold font-headline">Contact Details</h3>
                            <p className="text-muted-foreground mt-2">
                                Prefer to reach out directly? Here are my details.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                               <Mail className="h-6 w-6 text-primary"/>
                               <a href="mailto:yashjiakola@gmail.com" className="hover:underline">yashjiakola@gmail.com</a>
                            </div>
                             <div className="flex items-center gap-4">
                               <Mail className="h-6 w-6 text-primary"/>
                               <a href="mailto:yash.sharma23@spit.ac.in" className="hover:underline">yash.sharma23@spit.ac.in</a>
                            </div>
                             <div className="flex items-center gap-4">
                               <Phone className="h-6 w-6 text-primary"/>
                               <a href="tel:+918657378372" className="hover:underline">+91 8657378372</a>
                            </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-headline">Find me on</h3>
                          <div className="flex space-x-4 mt-4">
                              <Button asChild variant="outline" size="icon">
                                  <Link href="https://github.com/Yash2004Codes" target="_blank"><Github className="h-5 w-5" /><span className="sr-only">GitHub</span></Link>
                              </Button>
                              <Button asChild variant="outline" size="icon">
                                  <Link href="https://www.linkedin.com/in/yash-lalit-sharma/" target="_blank"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></Link>
                              </Button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
