export const layoutWiringRecipes = [
  {
    layoutWiringId: "ide-with-basic-flow",
    layoutId: "ide",
    tabs: {
      explorer: {
        component: "storiesList",
        story: "basic-flow",
        config: {
          title: "{{story.title}}",
          kind: "{{story.application}}",
        },
      },
    },

  },
]