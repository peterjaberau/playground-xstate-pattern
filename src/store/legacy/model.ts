export const editorWidgets = {}

export const appTemplate = {
  /**
   * Config
   * {
   *   plugins: {
   *     id: btn1,
   *     type: "widget",
   *     subtype: "ButtonWidget",
   *     container: "toolbar_container_1",
   *     template: {
   *       events: [],
   *       text: "Button",
   *     }
   *   }
   * }
   *
   */
}

export const appModel = {
  /**
   * evaluated.
   * {
   *   values: {
   *     btn1: {
   *       id: btn1,
   *       pluginType: "ButtonWidget",
   *       events: [],
   *       text: "Button",
   *     }
   *   },
   *   dependencyGraph: {},
   *   globals: {},
   * }
   */
  componentsTree: [
    {
      id: "$main",
      label: "Main",
      level: 0,
      childrenIds: ["container2", "button1"],
    },
    {
      id: "container2",
      label: "container2",
      level: 1,
      childrenIds: [
        "containerTitle2",
        "textTitle",
        "divider2",
        "collapsibleContainerConnectData",
        "collapsibleContainerConfigureData",
        "containerChartPreview",
        "collapsibleContainerConfigureLayout",
        "containerChartCode",
        "table1",
      ],
    },
    {
      id: "containerTitle2",
      label: "containerTitle2",
      _metadata: {
        type: "slot",
        widgetId: "container2",
        instance: [],
        parentPluginId: "container2",
        slot: "Header",
      },
      level: 2,
      childrenIds: [],
    },
    {
      id: "collapsibleContainerConnectData",
      label: "collapsibleContainerConnectData",
      metadata: {
        type: "slot",
        widgetId: "container2",
        parentPluginId: "container2",
        slot: "Body",
        instance: [],
      },
      level: 8,
      childrenIds: [
        "collapsibleTitle3",
        "collapsibleToggle3",
        "textDescription",
        "divider4",
        "textAPIURL",
        "modalDataPreview",
        "buttonSampleData",
        "buttonGetAPIData",
      ],
    },
    {
      id: "containerTitle2",
      label: "containerTitle2",
      level: 2,
      childrenIds: [],
    },
  ],

  values: {
    $main: {
      id: "$main",
      type: "frame",
      subtype: "Frame",
      screen: "Main",
      container: "",
      template: {
        type: "main",
        padding: "8px 12px",
      },
    },
    toolbar_container_1: {
      id: "toolbar_container_1",
      type: "widget",
      subtype: "ContainerWidget",
      container: "",
      screen: null,
      template: {
        views: [],
        padding: "12px",
        loading: false,
        viewKeys: [],
        events: {},
        currentViewKey: null,
      },
    },
    btn_in_toolbar_1: {
      id: "btn_in_toolbar_1",
      type: "widget",
      subtype: "ButtonWidget",
      screen: null,
      template: {
        events: [
          {
            method: "trigger",
            params: {
              options: {
                onSuccess: null,
                onFailure: null,
                additionalScope: null,
              },
            },
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "click",
            type: "datasource",
            id: "7183814b",
          },
          {
            id: "83354339",
            method: "trigger",
            params: {},
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "click",
            type: "datasource",
          },
          {
            id: "7183814b",
            method: "reset",
            params: {},
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "click",
            type: "datasource",
          },
        ],
        loading: false,
        disabled: false,
        variant: "solid",
        size: "md",
        text: "Button",
      },
      container: "toolbar_container_1",
      parentType: null,
    },
    Main: {
      id: "Main",
      type: "screen",
      subtype: "Screen",
      screen: null,
      container: "",
      template: {
        title: "Basic Flow Page",
        browserTitle: "",
        urlSlug: "basic-flow",
      },
    },
    btn_1: {
      id: "btn_1",
      type: "widget",
      subtype: "ButtonWidget",
      screen: "Main",
      template: {
        events: [
          {
            method: "trigger",
            params: {
              options: {
                onSuccess: null,
                onFailure: null,
                additionalScope: null,
              },
            },
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "click",
            type: "datasource",
            id: "7183814b",
          },
          {
            id: "83354339",
            method: "trigger",
            params: {},
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "click",
            type: "datasource",
          },
          {
            id: "7183814b",
            method: "reset",
            params: {},
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "click",
            type: "datasource",
          },
        ],
        loading: false,
        disabled: false,
        variant: "solid",
        size: "md",
        text: "Button",
      },
      parentType: null,
    },
    var_1: {
      id: "var_1",
      type: "state",
      subtype: "State",
      template: {
        value: {
          isPageLoaded: false,
          isWorkflowTemplateLoaded: false,
        },
      },
      screen: null,
    },
    QUERY_WORKFLOW_TEMPLATES: {
      id: "QUERY_WORKFLOW_TEMPLATES",
      type: "datasource",
      subtype: "WorkflowRun",
      resourceName: "WorkflowRun",
      screen: null,
      container: "",
      template: {
        query: null,
        data: null,
        isFetching: false,
        rawData: null,
        type: "GET",
      },
    },
    QUERY_WORKFLOW_FROM_API: {
      id: "QUERY_WORKFLOW_FROM_API",
      type: "datasource",
      subtype: "RESTQuery",
      resourceName: "REST-WithoutResource",
      screen: null,
      template: {
        query: null,
        data: null,
        isFetching: false,
        rawData: null,
        type: "GET",
      },
    },
    tbl_workflow_templates: {
      id: "tbl_workflow_templates",
      type: "widget",
      subtype: "TableWidget",
      screen: "Main",
      container: "",
      template: {
        selectedSourceRow: null,
        selectedRow: null,
        data: "{{  QUERY_WORKFLOW_TEMPLATES.data }}",
        events: [
          {
            method: "trigger",
            params: {},
            targetId: null,
            pluginId: "QUERY_WORKFLOW_TEMPLATES",
            event: "selectRow",
            type: "datasource",
            id: "7143129e",
          },
        ],
        emptyMessage: "No rows found",
      },
    },
    stories_list_1: {
      id: "stories_list_1",
      type: "widget",
      subtype: "StoriesListWidget",
      screen: "Main",
      template: {
        selectedSourceRow: null,
        selectedRow: null,
        emptyMessage: "No rows found",
        data: [
          {
            value: "story 1",
            label: "",
            badge: "story",
          },
          {
            value: "story 2",
            label: "",
            badge: "story",
          },
          {
            value: "story 3",
            label: "",
            badge: "story",
          },
        ],
        events: [],
      },
    },
  },

  id: "ide",
  title: "IDE + edges",
  type: "ui",
  subType: "layout",
  template: {
    initialLayout: {
      type: "root",
      edges: {
        left: {
          type: "edgePanel",
          id: "edge-explorer",
          size: 20,
          tabs: [{ id: "explorer", data: { title: "Explorer", kind: "files" } }],
        },
        bottom: {
          type: "edgePanel",
          id: "edge-output",
          size: 26,
          tabs: [
            { id: "output", data: { title: "Output", kind: "output" } },
            { id: "ide-terminal", data: { title: "Terminal", kind: "terminal" } },
          ],
        },
      },
      main: {
        type: "group",
        direction: "horizontal",
        children: [
          {
            type: "panel",
            id: "ide-editor",
            size: 64,
            activeTabId: "ide-main",
            tabs: [
              { id: "ide-main", data: { title: "index.tsx", kind: "editor" } },
              { id: "ide-readme", data: { title: "README.md", kind: "notes" } },
            ],
          },
          {
            type: "panel",
            id: "ide-preview",
            size: 36,
            tabs: [
              {
                id: "ide-preview-tab",
                data: { title: "Preview", kind: "preview" },
              },
            ],
          },
        ],
      },
    },
  },
}


export const app = {
  template: {
    widgets: {
      $main: {
        id: "$main",
        type: "Frame",
        template: {
          type: "main",
        },
      },
      container2: {
        id: "container2",
        type: "ContainerWidget",
        container: "",
        template: {
          currentViewKey: null,
          events: {},
          loading: false,
          viewKeys: [],
          views: [],
        },
      },
      containerTitle2: {
        id: "containerTitle2",
        type: "TextWidget",
        container: "container2",
        template: {
          value: "#### Container title",
        },
      },
      buttonSampleData: {
        id: "buttonSampleData",
        type: "ButtonWidget",
        container: "collapsibleContainerConnectData",
        template: {
          events: [],
          loading: false,
          disabled: false,
          variant: "solid",
          size: "md",
          text: "Button",
        },
      },
    },
  },
}