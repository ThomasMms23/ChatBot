import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">ForestHill</h3>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Mentions légales
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Conditions dutilisation
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Politique de confidentialité
          </Link>
        </div>
        <div className="flex flex-col gap-1 justify-self-center">
          <p className="text-muted-foreground">
            &copy; 2024 ForestHill. Tous droits réservés.
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-self-end">
          <p className="text-muted-foreground">
            Développé avec ❤️ par léquipe ForestHill
          </p>
        </div>
      </div>
    </footer>
  );
}
