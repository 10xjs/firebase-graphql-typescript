import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';

import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/auth';

import './main.css';

function getFunctionURL(app: firebase.app.App, name: string) {
  const {projectId, region} = app.options as any;

  return `${origin}/${projectId}/${region}/${name}`;

  // return `https://${region}-${projectId}.cloudfunctions.net/${name}`;
}

const AppRoot: React.FC<{app: firebase.app.App}> = ({app}) => {
  const [user, setUser] = React.useState<firebase.User | null>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() =>
    firebase.auth().onAuthStateChanged((user) => {
      setLoading(false);
      setUser(user);
    }),
  );

  const editorRef = React.useRef<any>();

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <FirebaseAuth
        uiConfig={{
          signInFlow: 'popup',
          signInOptions: [
            firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            'apple.com',
            'microsoft.com',
            'yahoo.com',
          ],
          callbacks: {
            signInSuccessWithAuthResult: () => false,
          },
        }}
        firebaseAuth={firebase.auth()}
      />
    );
  }

  return (
    <GraphiQL
      ref={editorRef}
      fetcher={async (params: unknown) => {
        const token = await user.getIdToken();

        const path = getFunctionURL(app, 'graphql');

        const response = await fetch(path, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(params),
        });

        return response.json();
      }}
    >
      <GraphiQL.Toolbar>
        <GraphiQL.Button
          onClick={() => editorRef.current?.handlePrettifyQuery()}
          title="Prettify Query (Shift-Ctrl-P)"
          label="Prettify"
        />
        <GraphiQL.Button
          onClick={() => editorRef.current?.handleMergeQuery()}
          title="Merge Query (Shift-Ctrl-M)"
          label="Merge"
        />
        <GraphiQL.Button
          onClick={() => editorRef.current?.handleCopyQuery()}
          title="Copy Query (Shift-Ctrl-C)"
          label="Copy"
        />
        <GraphiQL.Button
          onClick={() => editorRef.current?.handleToggleHistory()}
          title="Show History"
          label="History"
        />
        <div style={{flex: '1 1 auto'}} />
        <GraphiQL.Menu
          label={user.displayName ?? user.email ?? user.phoneNumber ?? 'guest'}
          title="File"
        >
          <GraphiQL.MenuItem
            title="Sign Out"
            label="Sign Out"
            onSelect={() => firebase.auth().signOut()}
          />
        </GraphiQL.Menu>
      </GraphiQL.Toolbar>
    </GraphiQL>
  );
};

const origin = 'http://localhost:5001';

async function main() {
  const configResonse = await fetch('/__/firebase/init.json');
  const config = await configResonse.json();

  const app = firebase.initializeApp(config);

  ReactDOM.render(<AppRoot app={app} />, document.getElementById('root'));
}

main();
