'use strict';

(function() {
  var app = angular.module('ComputerSolutionsApp');

  app.controller('MainCtrl', function () {
    this.details = {
      name: 'Computer Solutions',
      email: 'support@computer-solutions.fake',
      heroText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
            aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
            culpa qui officia deserunt mollit anim id est laborum.',
      bio: {
        p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
            aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
            culpa qui officia deserunt mollit anim id est laborum.',
        p2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
            aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
            culpa qui officia deserunt mollit anim id est laborum.',
        p3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
            aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
            culpa qui officia deserunt mollit anim id est laborum.'
      },
      services: [
        {
          name: 'Hardware Repair',
          img: 'http://placehold.it/300x300',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
                    aliquip ex ea commodo consequat. Duis aute irure dolor in \
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                    culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'Virus Removal',
          img: 'http://placehold.it/300x300',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
                    aliquip ex ea commodo consequat. Duis aute irure dolor in \
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                    culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'System Tuneup',
          img: 'http://placehold.it/300x300',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
                    aliquip ex ea commodo consequat. Duis aute irure dolor in \
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                    culpa qui officia deserunt mollit anim id est laborum.'
        }
      ],
      offices: [
        {
          location: 'New York',
          address: '123 Main Street',
          cityState: 'New York, NY 12345'
        },
        {
          location: 'Chicago',
          address: '123 Main Street',
          cityState: 'Chicago, IL 12345'
        },
        {
          location: 'San Francisco',
          address: '123 Main Street',
          cityState: 'San Francisco, CA 12345'
        }
      ]
    };
  });

})();
