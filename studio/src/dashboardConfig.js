export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6162ed62243e7719ca3d963a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8r2g1amn",
                  apiId: "3517b7fa-481d-48f3-b585-c71db5c8503a",
                },
                {
                  buildHookId: "6162ed63367fbbe1be586017",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bcaqsa7v",
                  apiId: "3093e4e2-2fd3-4e8b-9a3c-5e6793fa69aa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/faynburd/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bcaqsa7v.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
