/**
 * Module dependencies
 */
import React from 'react';

/**
 * UI Components
 */
import Card from '../../components/Card';

/**
 * Represents a Not Found view
 */
const NotFound = () => (
  <section className="not-found">
    <Card>
      <p>Sorry, page not found :(</p>
    </Card>
  </section>
);

/**
 * Expose component
 */
export default NotFound;
