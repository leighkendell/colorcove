import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';
import Section from './section';
import Wrapper from './wrapper';
import Button from './button';
import Heading from './heading';
import Text from './text';

interface State {
  eventId: string | undefined;
  hasError: boolean;
}

class ErrorBoundary extends Component<{}, State> {
  state = {
    eventId: undefined,
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { children } = this.props;
    const { hasError, eventId } = this.state;

    if (hasError) {
      return (
        <Section disableFadeIn>
          <Wrapper>
            <Heading type="h1">Oh no!</Heading>
            <Text>
              Something went wrong. You can try reloading this page or tell us
              about what happened.
            </Text>
            <Button onClick={() => Sentry.showReportDialog({ eventId })}>
              Report feedback
            </Button>
          </Wrapper>
        </Section>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
