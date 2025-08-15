import React, { useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { useScrollAnimation } from "../lib/scroll-animations";

export default function TermsConditions() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = "Terms & Conditions - ISD Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and Conditions for ISD Solutions - Read our terms of service and conditions of use.');
    }
  }, []);

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef as any}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & <span className="text-gradient-red">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div 
            ref={contentRef as any}
            className={`space-y-8 ${fadeInUp} ${contentVisible ? fadeInUpVisible : ''}`}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the ISD Solutions website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-muted-foreground">
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  ISD Solutions provides IT consulting and development services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Odoo ERP consulting and implementation</li>
                  <li>ERP Next development and customization</li>
                  <li>FBR digital invoicing solutions</li>
                  <li>Web and mobile application development</li>
                  <li>Cloud solutions and infrastructure</li>
                  <li>Oracle EBS upgrades and maintenance</li>
                </ul>
                <p className="text-muted-foreground">
                  All services are provided on an "as is" and "as available" basis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  The content, features, and functionality of our website and services are owned by ISD Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground mb-4">
                  For custom development projects:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Client retains ownership of their existing intellectual property</li>
                  <li>ISD Solutions retains rights to reusable components and frameworks</li>
                  <li>Custom code developed for clients becomes their property upon full payment</li>
                  <li>Third-party components remain under their respective licenses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>50% deposit required upon project initiation</li>
                  <li>Remaining balance due upon project completion</li>
                  <li>Payment methods: Bank transfer, credit card, or agreed payment terms</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are subject to change with 30 days notice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Project Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Project-specific terms include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Project scope and deliverables defined in written agreement</li>
                  <li>Timeline and milestones agreed upon before commencement</li>
                  <li>Client feedback and approval required at designated stages</li>
                  <li>Changes to scope may affect timeline and pricing</li>
                  <li>Warranty period of 30 days after project completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  ISD Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Your use or inability to use our services</li>
                  <li>Any unauthorized access to or use of our servers</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
                </ul>
                <p className="text-muted-foreground">
                  Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground mb-4">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship. This includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Business strategies and plans</li>
                  <li>Technical specifications and code</li>
                  <li>Client data and information</li>
                  <li>Financial information</li>
                  <li>Any other information marked as confidential</li>
                </ul>
                <p className="text-muted-foreground">
                  This obligation survives the termination of our business relationship.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate this agreement with written notice:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>For ongoing projects: 30 days written notice required</li>
                  <li>For breach of terms: Immediate termination possible</li>
                  <li>Upon termination, all outstanding payments become due</li>
                  <li>Confidentiality obligations remain in effect</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction where ISD Solutions is incorporated, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms shall be resolved through arbitration or in the courts of our jurisdiction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 