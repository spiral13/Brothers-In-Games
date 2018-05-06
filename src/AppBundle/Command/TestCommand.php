<?php

// src/AppBundle/Command/CreateUserCommand.php
namespace AppBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

class TestCommand extends Command
{
	protected function configure()
	{
	    $this->setName('app:create-user')

        // the short description shown while running "php bin/console list"
        ->setDescription('Creates a new user.')

        // the full command description shown when running the command with
        // the "--help" option
        ->setHelp('This command allows you to create a user...')
	        // configure an argument
        ->addOption('limit', null, InputOption::VALUE_REQUIRED, 'How much answer should be returned? (min:1, max: 50)', 50)
        ->addOption('request', null, InputOption::VALUE_REQUIRED, 'How many requests should be sent? (min:1, max: 3000)', 25);
	    
	}

	public function execute(InputInterface $input, OutputInterface $output)
	{
	    // retrieve the argument value using getArgument()
        $limit = ($input->getOption('limit') < 1 || $input->getOption('limit') > 50) ? 50 : $input->getOption('limit');
        $request = ($input->getOption('request') < 1 || $input->getOption('request') > 3000) ? 25 : $input->getOption('request');
	    $output->writeln('limit: '.$limit);
	    $output->writeln('request: '.$request);
	}
}