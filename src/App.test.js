import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    a: ({ children, href, target, rel, className }) => (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    ),
    span: ({ children, className }) => (
      <span className={className}>{children}</span>
    ),
    div: ({ children, className }) => (
      <div className={className}>{children}</div>
    ),
  },
}));

// Test suite: App component tests
describe("App Component Tests", () => {
  // Test 1: Page loads correctly
  describe("Page Loading Tests", () => {
    test("renders page with main content elements", () => {
      render(<App />);

      // Check page title text
      const titleText = screen.getByText(
        /Studying Github Actions with React App/i
      );
      expect(titleText).toBeInTheDocument();

      // Check if GitHub logo exists
      const logo = screen.getByAltText(/logo/i);
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute(
        "src",
        expect.stringContaining("github-actions-logo.svg")
      );
    });

    test("renders correct page structure", () => {
      render(<App />);

      // Check main container exists
      const appHeader = document.querySelector(".App-header");
      expect(appHeader).toBeInTheDocument();

      // Check button container exists
      const buttonContainer = document.querySelector(".button-container");
      expect(buttonContainer).toBeInTheDocument();
    });
  });

  // Test 2: Both buttons are functional
  describe("Button Functionality Tests", () => {
    test("GitHub Repo button works correctly", () => {
      render(<App />);

      // Test GitHub Repo button
      const githubRepoButton = screen.getByRole("link", {
        name: /GitHub Repo/i,
      });

      // Check button exists
      expect(githubRepoButton).toBeInTheDocument();

      // Check link URL is correct
      expect(githubRepoButton).toHaveAttribute(
        "href",
        "https://github.com/Sun0328/action-playground"
      );

      // Check opens in new window
      expect(githubRepoButton).toHaveAttribute("target", "_blank");
      expect(githubRepoButton).toHaveAttribute("rel", "noopener noreferrer");

      // Check CSS classes
      expect(githubRepoButton).toHaveClass("App-link", "animated-button");
    });

    test("Documentation button works correctly", () => {
      render(<App />);

      // Test Documentation button
      const docButton = screen.getByRole("link", {
        name: /Github Actions Documentation/i,
      });

      // Check button exists
      expect(docButton).toBeInTheDocument();

      // Check link URL is correct
      expect(docButton).toHaveAttribute(
        "href",
        "https://docs.github.com/en/actions/get-started/understand-github-actions"
      );

      // Check opens in new window
      expect(docButton).toHaveAttribute("target", "_blank");
      expect(docButton).toHaveAttribute("rel", "noopener noreferrer");

      // Check CSS classes
      expect(docButton).toHaveClass("App-link", "animated-button");
    });

    test("both buttons are present and functional", () => {
      render(<App />);

      // Check total of two link buttons
      const allButtons = screen.getAllByRole("link");
      expect(allButtons).toHaveLength(2);

      // Check each button has correct CSS classes
      allButtons.forEach((button) => {
        expect(button).toHaveClass("App-link");
        expect(button).toHaveClass("animated-button");
      });
    });

    test("buttons contain correct text and emojis", () => {
      render(<App />);

      // Check GitHub button text and emoji
      const githubButtonText = screen.getByText(/🐙 GitHub Repo/);
      expect(githubButtonText).toBeInTheDocument();

      // Check Documentation button text and emoji
      const docButtonText = screen.getByText(/📚 Github Actions Documentation/);
      expect(docButtonText).toBeInTheDocument();

      // Check arrow symbols exist (one for each button)
      const arrows = screen.getAllByText("→");
      expect(arrows).toHaveLength(2);
    });
  });

  // Additional test: Component integration
  describe("Component Integration Tests", () => {
    test("all required elements are present", () => {
      render(<App />);

      // Check all main elements exist
      expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Studying Github Actions with React App/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/🐙 GitHub Repo/)).toBeInTheDocument();
      expect(
        screen.getByText(/📚 Github Actions Documentation/)
      ).toBeInTheDocument();

      // Check button container contains two buttons
      const buttonContainer = document.querySelector(".button-container");
      const buttonsInContainer = buttonContainer.querySelectorAll("a");
      expect(buttonsInContainer).toHaveLength(2);
    });
  });
});
