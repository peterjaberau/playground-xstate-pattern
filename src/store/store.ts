
export const store = {
  ui: {
    templates: [
      {
        data: [],
      },
    ],
    applications: [],

    application: {
      id: "simple-app",
      title: "Simple App",
      type: "application",
      template: {
        defaultPage: "stories-page",
        pages: [
          {
            id: "stories_page",
            type: "frame",
            subtype: "Frame",
            template: {
              title: "Stories Page",
            },
            children: [
              {
                id: "dockable_layout_1",
                type: "widget",
                subtype: "DockPanelWidget",
                children: [
                  {
                    id: "stories_list_1",
                    type: "widget",
                    subtype: "StoriesListWidget",
                  },
                ],
              },
            ],
            plugins: {},
          },
          {
            id: "courses-page",
            type: "frame",
            subtype: "Frame",
            template: {
              title: "Courses Page",
            },
            children: [
              {
                id: "dockable_layout_1",
                type: "widget",
                subtype: "DockPanelWidget",
                children: [
                  {
                    id: "stories_list_2",
                    type: "widget",
                    subtype: "StoriesListWidget",
                  },
                ],
              },
            ],
            plugins: {},
          },
        ],
      },
      plugins: {},
    },

    currentApplication: {
      id: "simple-app",
      title: "Simple App",
      type: "application",
      template: {
        defaultPage: "courses-page",
        pages: [
          {
            id: "courses-page",
            title: "Courses Page",
          },
          {
            id: "modules-page",
            title: "Modules Page",
          },
          {
            id: "content-page",
            title: "Content Page",
          },
        ],
      },
    },
  },
}
