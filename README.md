# Trash Data Collection App

An **easy** way for **any** volunteer cleanup group – **any** kind of cleanup, **anywhere** in the world – to record consistent data about the trash they collect.

Use the [free demo app](https://demo.trashdata.app/) or spin up your own! It's open-source and released for free under the [Creative Commons Attribution-ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/).

# Pre-requisites

## Node & Yarn</h4>

This is built using [RedwoodJS](https://docs.redwoodjs.com/docs/2.x/quick-start/) which requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15).

## Postgres

Follow the instructions for local Postgres setup on [the RedwoodJS documentation](https://docs.redwoodjs.com/docs/local-postgres-setup/).

## Google API Key

The app uses [Google's Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) to determine the address for a user's current location based on the latitude and longitude of their device as reported by their browser. This is to save the user some input effort and to ensure consistent location reporting. You will need to create a Google Cloud account and a [project](https://console.cloud.google.com/projectcreate). Then you will need to [enable the Geocoding API for that project](https://console.cloud.google.com/google/maps-apis/api-list) and [generate an API key credential](https://console.cloud.google.com/google/maps-apis/credentials).

## OpenAI API Key

The app uses OpenAI to parse written or spoken transcriptions containing information about trash data. If you wish to use this feature, you will need to [generate an API key](https://platform.openai.com/api-keys). (if you do _not_ wish to use this feature, you should set `enableTranscriptionAI` to `false` in `/web/src/config.js`)

## Mixpanel Project Token

The app tracks pageviews and events using [Mixpanel](https://mixpanel.com/). Sign up for an account, create a project, and get a project token. It's up to you how you want to set up your reports and dashboards in Mixpanel, but these are the events that the app currently tracks:

| **Event**          | **Description**                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Home Page View** | Unique visits to the home page (i.e. visitors to the app)                                                             |
| **New Record**     | The event triggered when the user taps the button to create a new trash data record (i.e. key activation metric).     |
| **Data Saved**     | The event triggered when a record has been added (i.e. the completion of the primary user journey).                   |
| **Downloaded**     | The event triggered when a user downloads a CSV of all the data                                                       |
| **Transcribed**    | The event triggered when the user provides their data via an AI-parsed transcription.                                 |
| **Uploaded**       | The event triggered when the user uploads a spreadsheet with their trash data.                                        |
| **Feedback**       | The event triggered when the user provides a star rating after submitting data. This will have a value named `score`. |

The app will also track the user's `device`, `os`, and `browser`.

## A `.env` file

Create a `.env` file in the project root directory with the following key-value pairs:

```
DATABASE_URL="postgresql://<YOUR USERNAME>@localhost:5432/databasename_dev?connection_limit=1"
TEST_DATABASE_URL="postgresql://<YOUR USERNAME>@localhost:5432/databasename_test?connection_limit=1"
GOOGLE_API_KEY=<YOUR GOOGLE API KEY>
OPENAI_API_KEY=<YOUR OPENAI API KEY>
MIXPANEL_PROJECT_TOKEN=<YOUR MIXPANEL PROJECT TOKEN>
```

# Running the App Locally

Follow the instructions in the [RedwoodJS documentation](https://docs.redwoodjs.com/docs/quick-start/). After you clone [the repository](https://github.com/snowman-repos/trash-data-collection), run:

```
yarn install
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910) where you'll see the home screen. If you make any changes to the code they will be reflected automatically without needing to refresh.

The app uses the [Singapore Government Design System](https://designsystem.tech.gov.sg/).

## Configuration

There are 3 configuration options in the `/web/src/config.js` file:

| **Option**                | **Description**                                                                                                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **enableTranscriptionAI** | When this is set to `true`, the app will present a feature for the user to enter an audio transcription. You might want to turn this off if you are not paying for an OpenAI subscription, which is required for parsing transcriptions. |

**Default:** `true` |
| **enableCleanupGroupSelection** | When this is set to `true`, the form will prompt the user to select from a list of cleanup groups. This is for when you want to associate trash data collection records with specific cleanup volunteer groups. The list of groups to select from is in `/web/src/cleanup-groups.js`.

**Default:** `true` |
| **weightUnits** | The value is a string that denotes the weight unit. This is in case you're running this app in Liberia, Myanmar, or any other country that uses non-metric units.

**Default:** `"kg"` |

## Deployment

Follow the intstructions in [the RedwoodJS documentation](https://docs.redwoodjs.com/docs/tutorial/chapter4/deployment/). You'll also learn about setting up a remote database.

# Coming Soon

1. Generate social media post
2. Paginate trash data records
3. Trash data public API

# Feedback, Comments, Questions, and Suggestions

Please [create an issue](https://github.com/snowman-repos/trash-data-collection/issues/new) or [email Darryl](mailto:dazsnow@gmail.com).
