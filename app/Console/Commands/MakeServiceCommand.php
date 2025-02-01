<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class MakeServiceCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name : The name of the service}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new service class';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');
        $path = app_path('Services');
        $filePath = $path . '/' . $name . '.php';

        $filesystem = new Filesystem();

        // Ensure the Services directory exists
        if (!$filesystem->exists($path)) {
            $filesystem->makeDirectory($path, 0755, true);
        }

        // Check if the service file already exists
        if ($filesystem->exists($filePath)) {
            $this->error("Service {$name} already exists!");
            return Command::FAILURE;
        }

        // Create the service file
        $template = $this->getServiceTemplate($name);
        $filesystem->put($filePath, $template);

        $this->info("Service {$name} created successfully.");
        return Command::SUCCESS;
    }

    /**
     * Get the service class template.
     *
     * @param string $name
     * @return string
     */
    protected function getServiceTemplate(string $name): string
    {
        return "<?php\n\nnamespace App\\Services;\n\nclass {$name}\n{\n    /**\n     * Create a new {$name} instance.\n     */\n    public function __construct()\n    {\n        //\n    }\n\n    // Add your service methods here\n}";
    }
}