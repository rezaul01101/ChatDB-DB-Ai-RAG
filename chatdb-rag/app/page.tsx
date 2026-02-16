"use client";

import { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-semibold">ChatDB AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                How it Works
              </a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Login
              </button>
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="space-y-1 px-4 py-4">
              <a href="#features" className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Features
              </a>
              <a href="#how-it-works" className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                How it Works
              </a>
              <a href="#pricing" className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Pricing
              </a>
              <div className="border-t border-border pt-4">
                <button className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  Login
                </button>
                <button className="mt-2 block w-full rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-muted-foreground">Now in Public Beta</span>
            </div>

            {/* Main heading */}
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Chat With Your{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Database
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Connect. Embed. Ask. Transform your database into an intelligent chat interface with AI-powered insights and natural language queries.
            </p>

            {/* CTA Buttons */}
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:justify-center">
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25">
                Get Started Free
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-base font-semibold text-card-foreground transition-all hover:bg-muted hover:shadow-md">
                Login
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-black/5 dark:shadow-white/5">
              <div className="flex items-center gap-2 rounded-xl bg-muted px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="flex-1">
                  <div className="mx-auto max-w-xs rounded-md bg-background px-3 py-1.5 text-xs text-muted-foreground">
                    app.chatdb.ai
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-background p-6">
                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="hidden w-64 rounded-lg bg-muted p-4 sm:block">
                    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search conversations
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-card p-3 text-sm">
                        <p className="font-medium">Query customer data</p>
                        <p className="mt-1 text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                      <div className="rounded-lg p-3 text-sm text-muted-foreground">
                        <p className="font-medium">Sales by region</p>
                        <p className="mt-1 text-xs">Yesterday</p>
                      </div>
                      <div className="rounded-lg p-3 text-sm text-muted-foreground">
                        <p className="font-medium">Product inventory</p>
                        <p className="mt-1 text-xs">2 days ago</p>
                      </div>
                    </div>
                  </div>
                  {/* Main chat area */}
                  <div className="flex-1 rounded-lg bg-muted/50 p-4">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="rounded-2xl rounded-tl-none bg-card px-4 py-2.5 text-sm">
                          <p>Show me the top 10 customers by revenue this quarter</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600 text-white">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="rounded-2xl rounded-tl-none bg-card px-4 py-3 text-sm shadow-sm">
                          <p>Here are the top 10 customers by revenue this quarter:</p>
                          <div className="mt-3 overflow-hidden rounded-lg bg-muted/50">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="border-b border-border">
                                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Customer</th>
                                  <th className="px-3 py-2 text-right font-medium text-muted-foreground">Revenue</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-border/50">
                                  <td className="px-3 py-2">Acme Corp</td>
                                  <td className="px-3 py-2 text-right">$124,500</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                  <td className="px-3 py-2">TechStart Inc</td>
                                  <td className="px-3 py-2 text-right">$98,200</td>
                                </tr>
                                <tr>
                                  <td className="px-3 py-2">Global Solutions</td>
                                  <td className="px-3 py-2 text-right">$87,300</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                chat with your data
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Powerful features that make database interaction as simple as having a conversation.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Universal Database Support</h3>
              <p className="mt-2 text-muted-foreground">Connect to PostgreSQL, MySQL, MongoDB, and more. Secure SSL connections included.</p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Smart Embeddings</h3>
              <p className="mt-2 text-muted-foreground">AI-powered vector embeddings for semantic search. Select tables, estimate costs, start embedding.</p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Natural Language Queries</h3>
              <p className="mt-2 text-muted-foreground">Ask questions in plain English. Our AI translates them into optimized SQL queries.</p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Source References</h3>
              <p className="mt-2 text-muted-foreground">Every answer includes clickable source references. Verify data accuracy instantly.</p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Real-time Streaming</h3>
              <p className="mt-2 text-muted-foreground">Watch responses generate in real-time. Faster insights with streaming AI answers.</p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Enterprise Security</h3>
              <p className="mt-2 text-muted-foreground">Your data stays yours. Encrypted connections, secure storage, GDPR compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How it{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                works
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get started in minutes with three simple steps.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-border sm:left-1/2 sm:-ml-px"></div>

              {/* Step 1 */}
              <div className="relative mb-12 sm:mb-16">
                <div className="flex flex-col items-start sm:flex-row sm:items-center">
                  <div className="flex w-full flex-col items-start sm:w-1/2 sm:pr-12">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg shadow-primary/30">
                      1
                    </div>
                    <div className="ml-20 mt-4 sm:ml-0 sm:mt-0">
                      <h3 className="text-xl font-semibold">Connect Your Database</h3>
                      <p className="mt-2 text-muted-foreground">Add your database credentials securely. We support PostgreSQL, MySQL, MongoDB, and other popular databases with SSL encryption.</p>
                    </div>
                  </div>
                  <div className="hidden w-1/2 sm:block"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 sm:mb-16">
                <div className="flex flex-col items-start sm:flex-row sm:items-center">
                  <div className="hidden w-1/2 sm:block"></div>
                  <div className="flex w-full flex-col items-start sm:w-1/2 sm:pl-12">
                    <div className="relative ml-20 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg shadow-primary/30 sm:ml-0">
                      2
                    </div>
                    <div className="ml-20 mt-4 sm:ml-0 sm:mt-0">
                      <h3 className="text-xl font-semibold">Select & Embed Tables</h3>
                      <p className="mt-2 text-muted-foreground">Choose which tables to index. Our AI generates smart embeddings, optimizing for search accuracy and cost efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-start sm:flex-row sm:items-center">
                  <div className="flex w-full flex-col items-start sm:w-1/2 sm:pr-12">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg shadow-primary/30">
                      3
                    </div>
                    <div className="ml-20 mt-4 sm:ml-0 sm:mt-0">
                      <h3 className="text-xl font-semibold">Start Chatting</h3>
                      <p className="mt-2 text-muted-foreground">Ask questions in natural language. Get instant answers with source references, visualizations, and SQL query transparency.</p>
                    </div>
                  </div>
                  <div className="hidden w-1/2 sm:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your database?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join thousands of teams already using ChatDB AI to get instant insights from their data.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:justify-center">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25">
                Start Your Free Trial
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3.5 text-base font-semibold text-card-foreground transition-all hover:bg-muted">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h4 className="font-semibold">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground">Tutorials</a></li>
                <li><a href="#" className="hover:text-foreground">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
                <li><a href="#" className="hover:text-foreground">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium">ChatDB AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 ChatDB AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
