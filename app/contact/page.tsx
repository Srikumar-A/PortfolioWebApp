export default function ContactPage() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">
        Contact
      </h1>

      <div className="space-y-6 text-gray-400 leading-relaxed">

        <p>
          I’m always open to discussing new projects, collaborations, or
          opportunities. If you’d like to get in touch, feel free to reach out
          through any of the channels below.
        </p>

        <div className="space-y-4">

          <div>
            <h3 className="text-lg font-semibold text-white">
              Email
            </h3>
            <p>
              <a
                href="mailto:srikumar293official@gmail.com"
                className="hover:text-white transition"
              >
                srikumar293official@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              GitHub
            </h3>
            <p>
              <a
                href="https://github.com/Srikumar-A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                github.com/Srikumar-A
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              LinkedIn
            </h3>
            <p>
              <a
                href="https://www.linkedin.com/in/srikumar-a-84007121b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                linkedin.com/in/srikumar-a-84007121b/
              </a>
            </p>
          </div>

        </div>

        <p>
          I typically respond within a reasonable timeframe and look forward to
          connecting.
        </p>

      </div>
    </section>
  )
}
