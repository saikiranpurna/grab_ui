export default function TypographyPage() {
  return (
    <div className="min-h-screen glassmorphism-card p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Geist Typography
          </h1>
          <p className="text-xl text-muted-foreground">
            Beautiful typography powered by Vercel&apos;s Geist font family
          </p>
        </div>

        {/* Font Weights */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h2 className="text-3xl font-semibold text-primary mb-6">Font Weights</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Light (300)</p>
                <p className="text-xl font-light">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Regular (400)</p>
                <p className="text-xl font-normal">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Medium (500)</p>
                <p className="text-xl font-medium">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Semibold (600)</p>
                <p className="text-xl font-semibold">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Bold (700)</p>
                <p className="text-xl font-bold">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Extrabold (800)</p>
                <p className="text-xl font-extrabold">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Headings */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h2 className="text-3xl font-semibold text-primary mb-6">Heading Styles</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl font-bold text-foreground">Heading 1</h1>
              <p className="text-sm text-muted-foreground">text-6xl font-bold</p>
            </div>
            <div>
              <h2 className="text-5xl font-semibold text-foreground">Heading 2</h2>
              <p className="text-sm text-muted-foreground">text-5xl font-semibold</p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-foreground">Heading 3</h3>
              <p className="text-sm text-muted-foreground">text-4xl font-semibold</p>
            </div>
            <div>
              <h4 className="text-3xl font-medium text-foreground">Heading 4</h4>
              <p className="text-sm text-muted-foreground">text-3xl font-medium</p>
            </div>
            <div>
              <h5 className="text-2xl font-medium text-foreground">Heading 5</h5>
              <p className="text-sm text-muted-foreground">text-2xl font-medium</p>
            </div>
            <div>
              <h6 className="text-xl font-medium text-foreground">Heading 6</h6>
              <p className="text-sm text-muted-foreground">text-xl font-medium</p>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h2 className="text-3xl font-semibold text-primary mb-6">Body Text</h2>
          <div className="space-y-6">
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                Large text (text-lg): Geist is a new font family created by Vercel specifically for
                developers and designers. It features excellent readability at all sizes and
                includes ligatures that make code more readable. The font is optimized for both
                print and digital media, making it perfect for modern web applications.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-foreground">
                Base text (text-base): This is the default body text size. Geist provides excellent
                legibility and readability for long-form content. It&apos;s designed to reduce eye
                strain during extended reading sessions while maintaining visual appeal and
                professional appearance.
              </p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Small text (text-sm): Perfect for captions, labels, and secondary information. Even
                at smaller sizes, Geist maintains excellent clarity and readability.
              </p>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h2 className="text-3xl font-semibold text-primary mb-6">Code & Monospace</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Inline Code</p>
              <p className="text-base">
                Use the{" "}
                <code className="px-2 py-1 font-mono text-sm bg-primary/10 text-primary rounded border border-primary/20">
                  npm install geist
                </code>{" "}
                command to install the font.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Code Block</p>
              <pre className="glassmorphism p-4 border border-primary/20 font-mono text-sm overflow-x-auto">
                <code className="text-foreground">{`import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function Layout({ children }) {
  return (
    <html className={\`\${GeistSans.className} \${GeistMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Special Characters & Ligatures */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h2 className="text-3xl font-semibold text-primary mb-6">Special Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Numbers & Symbols</h3>
              <div className="space-y-2 font-mono text-lg">
                <p>0123456789</p>
                <p>!@#$%^&amp;*()</p>
                <p>+-=[]&#123;&#125;|;&#39;:&#34;,./?</p>
                <p>≠ ≤ ≥ ∞ π ∑ ∆ √ ∫ ≈</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Code Ligatures</h3>
              <div className="space-y-2 font-mono text-lg">
                <p>-&gt; =&gt; &lt;= &gt;= != ==</p>
                <p>:: && || ?? ?. !!</p>
                <p>&#47;&#42; &#42;&#47; &lt;&#47;&gt; &lt;-&gt;</p>
                <p>=== !== &lt;=&gt;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Font Loading Info */}
        <div className="glassmorphism-card p-8 border border-primary/20">
          <h2 className="text-3xl font-semibold text-primary mb-6">Implementation Details</h2>
          <div className="space-y-4">
            <div className="glassmorphism p-4 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">✨ Optimized Font Loading</h3>
              <p className="text-muted-foreground">
                Geist fonts are loaded using Next.js font optimization with automatic font swapping
                and preloading.
              </p>
            </div>
            <div className="glassmorphism p-4 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">🎨 Font Features Enabled</h3>
              <p className="text-muted-foreground">
                Ligatures (rlig, calt), stylistic sets (ss01), and optical sizing are enabled for
                enhanced typography.
              </p>
            </div>
            <div className="glassmorphism p-4 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">
                📱 Cross-Platform Compatibility
              </h3>
              <p className="text-muted-foreground">
                Includes proper fallbacks to system fonts ensuring consistent appearance across all
                devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
